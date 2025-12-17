"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function PizzaHero() {
  const t = useTranslations("home.hero");
  const tCommon = useTranslations("common");

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#005293] via-[#003d73] to-[#002855]"
      style={{ minHeight: "calc(100vh - 73px)" }}
    >
      {/* ---------- Decorative Spades ---------- */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute left-10 top-20 text-[120px] text-white">♠</div>
        <div className="absolute bottom-20 right-20 text-[100px] text-white">♠</div>
        <div className="absolute right-1/4 top-1/2 text-[80px] text-white">♠</div>
      </div>

      {/* ---------- CONTENT CONTAINER (alleen tekst) ---------- */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full z-10">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{ minHeight: "calc(100vh - 73px)" }}
        >
          {/* ---------- LEFT: TEXT ---------- */}
          <div className="relative z-10 text-white py-16 lg:py-0">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FECC00] px-4 py-2 text-sm font-bold text-[#002855] shadow-lg">
              <span className="text-lg">🔥</span>
              {t("badge")}
            </span>

            {/* Headline */}
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {t("title")}
              <span className="block text-[#FECC00]">{t("titleHighlight")}</span>
              <span className="block">{t("titleEnd")}</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-slate-200 max-w-xl leading-relaxed">
              {t("description")}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/bestalla"
                className="inline-flex items-center gap-2 rounded-full bg-[#FECC00] px-8 py-4 text-lg font-bold text-[#002855] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                {t("orderOnline")}
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/meny"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-[#005293]"
              >
                {t("seeMenu")}
              </Link>
            </div>

            {/* Ratings */}
            <div className="mt-10 flex items-center gap-2 text-slate-200">
              <Star className="h-5 w-5 fill-[#FECC00]" />
              <span className="text-sm font-semibold">{t("rating")}</span>
              <span className="text-sm text-slate-300">({t("reviews")})</span>
            </div>

            {/* Info */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#FECC00]" />
                {t("deliveryTime")}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#FECC00]" />
                {tCommon("address")}, {tCommon("city")}
              </div>
            </div>
          </div>

          {/* Rechter kolom leeg voor spacing op grote schermen */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* ---------- RIGHT: BIG ROTATING PIZZA, BUITEN CONTAINER ---------- */}
      <div className="absolute inset-y-0 right-0 w-[52vw] min-w-[420px] flex items-center justify-center overflow-hidden z-0">
        <div className="pizza-rotator relative w-[140%] max-w-none">
         <img
  src="/assets/images/hero-pepperoni-pizza-spaderkung.webp"
  alt={t("imageAlt")}
 className="w-full h-auto object-contain -translate-y-[6%]"
          />
        </div>

        {/* Discount Badge */}
        <div className="absolute bottom-8 right-8 rounded-2xl bg-white p-4 shadow-2xl">
          <div className="text-center">
            <div className="text-3xl font-black text-[#005293]">20%</div>
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
              {t("discount").split(" ")[0]}
            </div>
            <div className="text-xs text-slate-500">
              {t("discount").split(" ").slice(1).join(" ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
