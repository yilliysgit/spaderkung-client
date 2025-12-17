"use client";

import { useTranslations } from "next-intl";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";

export default function ContactHero() {
  const t = useTranslations("contact.hero");
  const tCommon = useTranslations("common");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#005293] via-[#003d73] to-[#002855] text-white pb-24 pt-20">
      {/* Decorative Icons with animation */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute left-10 top-20 text-[140px] animate-pulse">♠</div>
        <div className="absolute right-16 bottom-24 text-[120px] animate-pulse" style={{ animationDelay: '1s' }}>♠</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* TEXT CONTENT */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-[#FECC00] px-4 py-1.5 text-sm font-bold text-[#002855] shadow-lg animate-bounce">
              {t("badge")}
            </span>

            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
              {t("title")} <span className="text-[#FECC00]">{t("titleHighlight")}</span>
            </h1>

            <p className="text-lg text-slate-200 max-w-lg leading-relaxed">
              {t("description")}
            </p>

            {/* QUICK CONTACT BOXES with hover effects */}
            <div className="grid gap-4 pt-6">
              {/* Phone */}
              <a 
                href={`tel:${tCommon("phone")}`}
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/20 hover:border-[#FECC00]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FECC00] group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-[#002855]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{t("phone.label")}</div>
                  <div className="text-slate-200 group-hover:text-[#FECC00] transition-colors">{t("phone.value")}</div>
                </div>
              </a>

              {/* Address */}
              
                <a href="https://maps.google.com/maps?q=Regeringsgatan%205%20Östersund"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/20 hover:border-[#FECC00]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FECC00] group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 text-[#002855]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{t("address.label")}</div>
                  <div className="text-slate-200 group-hover:text-[#FECC00] transition-colors">{t("address.value")}</div>
                </div>
              </a>

              {/* Email */}
              
                <a href={`mailto:${tCommon("email")}`}
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/20 hover:border-[#FECC00]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FECC00] group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-[#002855]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{t("email.label")}</div>
                  <div className="text-slate-200 group-hover:text-[#FECC00] transition-colors">{t("email.value")}</div>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden md:block">
            <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
                alt={t("imageAlt")}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/70 to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-8 w-8 text-[#005293]" />
                  <div>
                    <div className="text-2xl font-black text-[#005293]">{t("supportBadge")}</div>
                    <div className="text-xs font-bold text-slate-600">{t("supportLabel")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}