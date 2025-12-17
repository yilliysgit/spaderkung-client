"use client";

import { useTranslations } from "next-intl";

export default function AboutStory() {
  const t = useTranslations("about.story");

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
              alt={t("imageAlt")}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              {t("p1")}
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              {t("p2")}
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              {t("p3")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
