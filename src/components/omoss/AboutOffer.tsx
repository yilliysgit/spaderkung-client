"use client";

import { useTranslations } from "next-intl";

export default function AboutOffer() {
  const t = useTranslations("about.offer");

  const items = [
    {
      key: "classicPizza",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "panPizza",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    },
    {
      key: "salads",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    },
  ];

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

        {/* Offer Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ key, image }) => (
            <article
              key={key}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={image}
                  alt={t(`${key}.title`)}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {t(`${key}.title`)}
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  {t(`${key}.desc`)}
                </p>
                <span className="text-lg font-bold text-[#005293]">
                  {t(`${key}.price`)}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}