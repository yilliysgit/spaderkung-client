"use client";

import { useTranslations } from "next-intl";

export default function AboutJourney() {
  const t = useTranslations("about.journey");

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        {/* Timeline cards */}
        <div className="grid gap-6 md:grid-cols-3">
          
          {/* YEAR 1 - 2008 */}
          <div className="rounded-2xl bg-gradient-to-br from-[#005293] to-[#003d73] p-8 text-white shadow-md">
            <div className="mb-4 text-4xl font-black">{t("start.year")}</div>
            <h3 className="mb-2 text-xl font-bold">{t("start.title")}</h3>
            <p className="text-white/90">{t("start.desc")}</p>
          </div>

          {/* YEAR 2 - 2015 */}
          <div className="rounded-2xl bg-gradient-to-br from-[#FECC00] to-[#FDB913] p-8 shadow-md">
            <div className="mb-4 text-4xl font-black text-[#002855]">
              {t("expand.year")}
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#002855]">
              {t("expand.title")}
            </h3>
            <p className="text-[#002855]/90">{t("expand.desc")}</p>
          </div>

          {/* YEAR 3 - 2024 */}
          <div className="rounded-2xl bg-gradient-to-br from-[#005293] to-[#003d73] p-8 text-white shadow-md">
            <div className="mb-4 text-4xl font-black">{t("today.year")}</div>
            <h3 className="mb-2 text-xl font-bold">{t("today.title")}</h3>
            <p className="text-white/90">{t("today.desc")}</p>
          </div>
        </div>

      </div>
    </section>
  );
}