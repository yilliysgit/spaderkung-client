"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Phone } from "lucide-react";

export default function EventSection() {
  const tEvent = useTranslations("home.event");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#005293] to-[#002855] py-20 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 text-[200px]">♠</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              {tEvent("title").split(tEvent("titleHighlight"))[0]}
              <span className="text-[#FECC00]">{tEvent("titleHighlight")}</span>
              {tEvent("title").split(tEvent("titleHighlight"))[1]}
            </h2>

            <p className="mb-8 text-lg text-slate-200">
              {tEvent("description")}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#FECC00] px-8 py-4 font-bold text-[#002855] shadow-lg transition hover:-translate-y-1">
                {tEvent("bookNow")}
                <ArrowRight className="h-5 w-5" />
              </button>

              <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#005293]">
                <Phone className="h-5 w-5" />
                {tEvent("callUs")}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
                alt={tEvent("imageAlt")}
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
