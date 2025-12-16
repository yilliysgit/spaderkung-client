"use client";

import { useState } from "react";
import MenuHero from "./MenuHero";
import MenuFilters from "./MenuFilters";
import MenuGrid from "./MenuGrid";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showVegetarian, setShowVegetarian] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <MenuHero 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <MenuFilters
        activeCategory={activeCategory}
        showVegetarian={showVegetarian}
        onCategoryChange={setActiveCategory}
        onVegetarianToggle={() => setShowVegetarian(!showVegetarian)}
      />
      
      <MenuGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        showVegetarian={showVegetarian}
      />
    </main>
  );
}