"use client";

import { Heart, Users, Award, Pizza } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutValues() {
  const t = useTranslations("about.values");

  const cards = [
    {
      icon: Heart,
      title: t("loveFood.title"),
      desc: t("loveFood.desc"),
    },
    {
      icon: Users,
      title: t("familyOwned.title"),
      desc: t("familyOwned.desc"),
    },
    {
      icon: Award,
      title: t("qualityFirst.title"),
      desc: t("qualityFirst.desc"),
    },
    {
      icon: Pizza,
      title: t("wideSelection.title"),
      desc: t("wideSelection.desc"),
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FECC00]">
                  <Icon className="h-6 w-6 text-[#002855]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-slate-600">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}