"use client";

import { useTranslations } from "next-intl";
import { Clock, Star, Phone } from "lucide-react";

export default function Features() {
  const t = useTranslations("home.features");

  const items = [
    {
      icon: <Clock className="h-6 w-6 text-[#002855]" />,
      title: t("fastDelivery"),
      desc: t("fastDeliveryDesc"),
    },
    {
      icon: <Star className="h-6 w-6 text-[#002855]" />,
      title: t("quality"),
      desc: t("qualityDesc"),
    },
    {
      icon: <Phone className="h-6 w-6 text-[#002855]" />,
      title: t("support"),
      desc: t("supportDesc"),
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-50 p-8 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FECC00]">
                {item.icon}
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
