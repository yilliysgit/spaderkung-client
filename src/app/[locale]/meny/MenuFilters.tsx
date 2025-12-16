"use client";

import { useTranslations } from "next-intl";
import { Leaf } from "lucide-react";

interface MenuFiltersProps {
  activeCategory: string;
  showVegetarian: boolean;
  onCategoryChange: (category: string) => void;
  onVegetarianToggle: () => void;
}

export default function MenuFilters({
  activeCategory,
  showVegetarian,
  onCategoryChange,
  onVegetarianToggle
}: MenuFiltersProps) {
  const t = useTranslations("menu");

  const categories = [
    { key: "all", label: t("filters.all") },
    { key: "pizza", label: t("categories.pizza") },
    { key: "panPizza", label: t("categories.panPizza") },
    { key: "panPizzaSpecial", label: t("categories.panPizzaSpecial") },
    { key: "specialPizza", label: t("categories.specialPizza") },
    { key: "salads", label: t("categories.salads") },
    { key: "pasta", label: t("categories.pasta") },
    { key: "alacarte", label: t("categories.alacarte") },
  ];

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => onCategoryChange(cat.key)}
              className={`
                px-6 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all
                ${activeCategory === cat.key 
                  ? 'bg-[#005293] text-white shadow-md' 
                  : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                }
              `}
            >
              {cat.label}
            </button>
          ))}

          <button
            onClick={onVegetarianToggle}
            className={`
              ml-auto px-6 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all flex items-center gap-2
              ${showVegetarian 
                ? 'bg-green-500 text-white shadow-md' 
                : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
              }
            `}
          >
            <Leaf className="h-4 w-4" />
            {t("filters.vegetarian")}
          </button>
        </div>
      </div>
    </div>
  );
}