"use client";

import { useTranslations } from "next-intl";
import { ShoppingCart, Leaf } from "lucide-react";
import Image from "next/image";


interface MenuCardProps {
  item: {
    name: string;
    ingredients: string;
    price?: number;
    sizes?: { small: number; large: number };
    category: string;
    vegetarian?: boolean;
    badge?: string;
    note?: string;
  };
}

export default function MenuCard({ item }: MenuCardProps) {
  const t = useTranslations("menu");
  const tBadges = useTranslations("menu.badges");

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case "bestseller":
        return "bg-red-500 text-white";
      case "popular":
        return "bg-orange-500 text-white";
      case "chefChoice":
        return "bg-purple-500 text-white";
      case "new":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "bestseller": return "⭐";
      case "popular": return "🔥";
      case "chefChoice": return "👨‍🍳";
      case "new": return "✨";
      default: return "";
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
      
      {/* Image placeholder with gradient */}
      <div className="relative h-48 bg-gradient-to-br from-[#FECC00]/20 to-[#005293]/20 flex items-center justify-center overflow-hidden">
        {/* Badge overlay */}
        {item.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 ${getBadgeStyle(item.badge)}`}>
            <span>{getBadgeIcon(item.badge)}</span>
            {tBadges(item.badge)}
          </div>
        )}

        {/* Vegetarian badge */}
        {item.vegetarian && (
          <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg">
            <Leaf className="h-4 w-4" />
          </div>
        )}

        {/* Pizza icon placeholder */}
        <div className="text-8xl opacity-20 group-hover:scale-110 transition-transform">
          🍕
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900 mb-1">
            {item.name}
            {item.note && (
              <span className="ml-2 text-xs font-semibold text-[#005293] bg-blue-50 px-2 py-1 rounded">
                {item.note}
              </span>
            )}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2">
            {item.ingredients}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          {item.price ? (
            <span className="text-2xl font-black text-[#005293]">
              {item.price} kr
            </span>
          ) : item.sizes ? (
            <div className="flex gap-3 text-sm">
              <div>
                <span className="text-slate-600">{t("sizing.small")}:</span>
                <span className="ml-1 font-bold text-[#005293]">{item.sizes.small} kr</span>
              </div>
              <div>
                <span className="text-slate-600">{t("sizing.large")}:</span>
                <span className="ml-1 font-bold text-[#005293]">{item.sizes.large} kr</span>
              </div>
            </div>
          ) : null}
        </div>

        {/* Add to cart button */}
        <button className="w-full bg-[#005293] hover:bg-[#003d73] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg group-hover:scale-[1.02]">
          <ShoppingCart className="h-5 w-5" />
          {t("addToCart")}
        </button>
      </div>
    </div>
  );
}