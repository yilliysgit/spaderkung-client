"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PromoGrid() {
  const t = useTranslations("home.promo");

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid auto-rows-[240px] gap-6 md:grid-cols-4">

          {/* BIG YELLOW - Order Favorite */}
          <div className="relative flex flex-col justify-end overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1 md:col-span-2 md:row-span-2">
            <Image
              src={t("orderFavorite.image")}
              alt={t("orderFavorite.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Zeer subtiele gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            <div className="relative z-10 p-8">
              <h2 className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg">
                {t("orderFavorite.title")}
              </h2>
              <p className="mt-2 text-sm font-medium text-white/90 drop-shadow">
                {t("orderFavorite.desc")}
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#005293] shadow-md transition hover:bg-[#FECC00] hover:text-[#002855]">
                {t("orderFavorite.cta")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* DISCOUNT CARD */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1">
            <Image
              src={t("discount.image")}
              alt={t("discount.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold drop-shadow-lg">{t("discount.title")}</h3>
                <p className="text-sm text-white/90 drop-shadow">{t("discount.desc")}</p>
              </div>
              <span className="mt-auto text-3xl font-bold drop-shadow-lg">🔥</span>
            </div>
          </div>

          {/* DECORATIVE IMAGE */}
          <div className="relative overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1">
            <Image
              src="https://images.unsplash.com/photo-1605276373954-e59c0c2985d8?auto=format&fit=crop&w=1000&q=80"
              alt="Delicious fresh pizza"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* KIDS MENU */}
          <div className="relative flex items-center overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1 md:col-span-2">
            <Image
              src={t("kidsMenu.image")}
              alt={t("kidsMenu.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

            <div className="relative z-10 p-8 flex items-center justify-between w-full">
              <div className="max-w-xs">
                <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">{t("kidsMenu.title")}</h3>
                <p className="mt-2 text-sm text-white/90 drop-shadow">
                  {t("kidsMenu.desc")}
                </p>
              </div>

              <div className="ml-auto h-40 w-40 relative rounded-full overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1618213837799-287f52f6a8d3?auto=format&fit=crop&w=600&q=80"
                  alt="Kids enjoying pizza"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>
          </div>

          {/* CUSTOM PIZZA */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1">
            <Image
              src={t("makeOwn.image")}
              alt={t("makeOwn.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold drop-shadow-lg">{t("makeOwn.title")}</h3>
                <p className="text-sm text-white/90 drop-shadow">{t("makeOwn.desc")}</p>
              </div>
              <span className="mt-auto text-3xl drop-shadow-lg">🍕</span>
            </div>
          </div>

          {/* CATERING */}
          <div className="relative overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1">
            <Image
              src={t("catering.image")}
              alt={t("catering.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold drop-shadow-lg">{t("catering.title")}</h3>
                <p className="mt-2 text-sm text-white/90 drop-shadow">{t("catering.desc")}</p>
              </div>

              <button className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#005293] transition hover:bg-[#FECC00] hover:text-[#002855]">
                {t("catering.cta")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* LUNCH */}
          <div className="relative overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1">
            <Image
              src={t("lunch.image")}
              alt={t("lunch.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            <div className="relative z-10 p-6">
              <div className="flex h-full flex-col justify-between">
                <span className="inline-block w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-[#005293]">
                  {t("lunch.badge")}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white drop-shadow-lg">{t("lunch.title")}</h3>
                <p className="mt-2 text-sm font-semibold text-white drop-shadow-lg">
                  {t("lunch.price")}
                </p>
                <p className="text-xs text-white/90 drop-shadow">{t("lunch.time")}</p>
              </div>
            </div>
          </div>

          {/* STUDENT */}
          <div className="relative overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1">
            <Image
              src={t("student.image")}
              alt={t("student.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            <div className="relative z-10 p-6 text-white">
              <span className="text-3xl drop-shadow-lg">🎓</span>
              <h3 className="mt-2 text-xl font-bold drop-shadow-lg">{t("student.title")}</h3>
              <p className="mt-2 text-sm text-white/90 drop-shadow">{t("student.desc")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}