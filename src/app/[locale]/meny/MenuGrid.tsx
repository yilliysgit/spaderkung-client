"use client";

import { useTranslations } from "next-intl";
import MenuCard from "./MenyItemCard";
import { useMemo, useState } from "react";

interface MenuGridProps {
  activeCategory: string;
  searchQuery: string;
  showVegetarian: boolean;
}

export default function MenuGrid({ activeCategory, searchQuery, showVegetarian }: MenuGridProps) {
  const t = useTranslations("menu");
  const items = t.raw("items");

  const [visibleCount, setVisibleCount] = useState(12);

  // Filter items
  const filteredItems = useMemo(() => {
    const allEntries = Object.entries(items);
    
    return allEntries.filter(([key, item]: [string, any]) => {
      // Category filter
      if (activeCategory !== "all") {
        if (item.category !== activeCategory) {
          return false;
        }
      }

      // Vegetarian filter
      if (showVegetarian) {
        if (!item.vegetarian) {
          return false;
        }
      }

      // Search filter
      if (searchQuery && searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const nameMatch = item.name?.toLowerCase().includes(query);
        const ingredientsMatch = item.ingredients?.toLowerCase().includes(query);
        
        if (!nameMatch && !ingredientsMatch) {
          return false;
        }
      }

      return true;
    });
  }, [items, activeCategory, searchQuery, showVegetarian]);

  // Reset visible count when filters change
  useMemo(() => {
    setVisibleCount(12);
  }, [activeCategory, searchQuery, showVegetarian]);

  const totalItems = filteredItems.length;
  const itemsToShow = filteredItems.slice(0, visibleCount);
  const remaining = totalItems - visibleCount;

  // Show buttons logic
  const showButtons = totalItems >= 13 && remaining > 0;

  const handleLoadMore = () => {
    const newCount = visibleCount + 12;
    const newRemaining = totalItems - newCount;
    
    // If remaining after load is ≤ 12, load everything
    if (newRemaining <= 12) {
      setVisibleCount(totalItems);
    } else {
      setVisibleCount(newCount);
    }
  };

  const handleShowAll = () => {
    setVisibleCount(totalItems);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            {activeCategory === "all" 
              ? t("filters.all")
              : t(`categories.${activeCategory}`)
            }
          </h2>
          <p className="text-slate-600 mt-2">
            {totalItems} {totalItems === 1 ? t("itemCount.single") : t("itemCount.multiple")}
            {visibleCount < totalItems && ` (${t("itemCount.showing")} ${visibleCount})`}
          </p>
        </div>

        {/* Grid */}
        {itemsToShow.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {itemsToShow.map(([key, item]: [string, any], index) => (
                <div
                  key={key}
                  className="animate-fadeIn"
                  style={{
                    animationDelay: `${(index % 12) * 0.05}s`
                  }}
                >
                  <MenuCard item={item} />
                </div>
              ))}
            </div>

            {/* Load More Buttons */}
            {showButtons && (
              <div className="mt-12 flex justify-center gap-4">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-4 bg-[#005293] hover:bg-[#003d73] text-white font-bold rounded-xl transition-all hover:shadow-lg hover:scale-105"
                >
                  {t("loadMore")}
                </button>
                <button
                  onClick={handleShowAll}
                  className="px-8 py-4 bg-[#FECC00] hover:bg-[#e5b800] text-[#002855] font-bold rounded-xl transition-all hover:shadow-lg hover:scale-105"
                >
                  {t("showAll")} ({totalItems})
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍕</div>
            <p className="text-xl text-slate-600">
              {searchQuery ? `${t("noResults")} "${searchQuery}"` : t("noCategoryItems")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}