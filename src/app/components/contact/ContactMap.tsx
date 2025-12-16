"use client";

import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

export default function ContactMap() {
  const t = useTranslations("contact.map");

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-6 mt-16">
      <div className="mb-6 flex items-center gap-3">
        <MapPin className="h-7 w-7 text-[#005293]" />
        <h3 className="text-3xl font-bold text-[#002855]">{t("title")}</h3>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[400px] hover:shadow-3xl transition-shadow">
        <iframe
          src="https://maps.google.com/maps?q=Regeringsgatan%205%20Östersund&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          title={t("altText")}
        ></iframe>
      </div>
    </div>
  );
}