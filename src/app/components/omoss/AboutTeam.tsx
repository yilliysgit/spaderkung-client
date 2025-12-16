"use client";

import { useTranslations } from "next-intl";

export default function AboutTeam() {
  const t = useTranslations("about.team");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#005293] to-[#002855] py-20 text-white">
      {/* Background Spade */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 text-[200px]">♠</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* LEFT TEXT */}
          <div>
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              {t("title")}{" "}
              <span className="text-[#FECC00]">{t("highlight")}</span>
            </h2>
            <p className="mb-8 text-lg text-slate-200">
                {t("desc")}
            </p>



            {/* STATS */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-2 text-3xl font-bold">{t("stat1.value")}</div>
                <p className="text-sm text-slate-200">{t("stat1.label")}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-2 text-3xl font-bold">{t("stat2.value")}</div>
                <p className="text-sm text-slate-200">{t("stat2.label")}</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                alt={t("imageAlt")}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/60 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
