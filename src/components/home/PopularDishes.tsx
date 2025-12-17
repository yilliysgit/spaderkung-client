"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function PopularDishes() {
  const t = useTranslations("home.popularDishes");

  // Alle gerechten uit JSON ophalen
  const dishes = t.raw("dishes");

  // We zetten JSON object → array van dishes
  const dishList = Object.keys(dishes).map((key) => ({
    id: key,
    ...dishes[key]
  }));

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        {/* TITLE */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishList.map((dish) => (
            <article
              key={dish.id}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 shadow-lg">
                  <span className="text-sm">{dish.emoji}</span>
                  <span className="text-xs font-bold text-slate-900">
                    {dish.tag}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {dish.name}
                </h3>

                <p className="mb-4 text-sm text-slate-600">{dish.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#005293]">
                    {dish.price} {t("currency")}
                  </span>

                  <button className="rounded-full bg-[#005293] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#003d73]">
                    {t("addToCart")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* VIEW MENU CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-3 font-semibold text-slate-900 shadow-sm transition hover:border-[#005293] hover:text-[#005293]"
          >
            {t("viewMenu")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
