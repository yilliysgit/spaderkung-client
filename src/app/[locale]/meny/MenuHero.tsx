"use client";

import { useTranslations } from "next-intl";
import { Search } from "lucide-react";

interface MenuHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function MenuHero({ searchQuery, onSearchChange }: MenuHeroProps) {
  const t = useTranslations("menu.hero");
  const tFilters = useTranslations("menu.filters");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#005293] via-[#003d73] to-[#002855] text-white py-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-10 text-[120px]">♠</div>
        <div className="absolute right-16 bottom-16 text-[100px]">♠</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-[#FECC00] px-4 py-1.5 text-sm font-bold text-[#002855] mb-4">
            {t("badge")}
          </span>

          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-4">
            {t("title")}{" "}
            <span className="text-[#FECC00]">{t("titleHighlight")}</span>
          </h1>

          <p className="text-lg text-slate-200 mb-8">
            {t("description")}
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder={tFilters("search")}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-slate-300 focus:outline-none focus:border-[#FECC00] focus:bg-white/20 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
}