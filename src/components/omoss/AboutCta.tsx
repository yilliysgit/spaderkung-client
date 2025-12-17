"use client";

import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";

export default function AboutCTA() {
  const t = useTranslations("about.cta");
  const tCommon = useTranslations("common");

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
        <div className="mb-6 text-6xl">♠</div>

        <h2 className="mb-6 font-serif text-4xl font-bold text-slate-900 md:text-5xl">
          {t("title")}
        </h2>

        <p className="mb-8 text-lg text-slate-600">
          {t("subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          
            <a href="/bestalla"
            className="inline-flex items-center gap-2 rounded-full bg-[#005293] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1"
          >
            {t("orderNow")}
          </a>

          
            <a href={`tel:${tCommon("phone")}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-lg font-bold text-slate-900 transition hover:border-[#005293] hover:text-[#005293]"
          >
            <Phone className="h-5 w-5" />
            {tCommon("phone")}
          </a>
        </div>
      </div>
    </section>
  );
}