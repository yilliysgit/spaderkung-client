"use client";

import { useTranslations } from "next-intl";
import { Star, MapPin, Clock } from "lucide-react";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#005293] via-[#003d73] to-[#002855] text-white">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute left-10 top-10 text-[100px]">♠</div>
        <div className="absolute bottom-10 right-20 text-[80px]">♠</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full bg-[#FECC00] px-4 py-1.5 text-sm font-bold text-[#002855]">
            {t("badge")}
          </span>

          <h1 className="mb-4 font-serif text-4xl font-bold leading-tight md:text-6xl">
            {t("title")}{" "}
            <span className="text-[#FECC00]">{t("titleHighlight")}</span>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-200">
            {t("description")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-[#FECC00] text-[#FECC00]" />
              <span>{t("rating")}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#FECC00]" />
              <span>{t("address")}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#FECC00]" />
              <span>{t("open")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}