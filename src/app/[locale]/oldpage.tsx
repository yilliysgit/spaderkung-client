"use client"

import React from 'react'

import { Phone, MapPin, Clock, Star, ArrowRight } from 'lucide-react'

export default function SpaderKungWebsite() {
  const dishes = [
    { 
      name: "Pan Afrikana", 
      price: "145 kr", 
      tag: "Storsäljare", 
      emoji: "🔥",
      desc: "Banankyckling, curry, ananas, jordnötter",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Kebabpizza", 
      price: "135 kr", 
      tag: "Favorit", 
      emoji: "❤️",
      desc: "Nykött, feferoni, vitlökssås",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Carbonara", 
      price: "129 kr", 
      tag: "Krämig", 
      emoji: "🧀",
      desc: "Bacon, lök, grädde, parmesan",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Kebabsallad", 
      price: "120 kr", 
      tag: "Fräscht", 
      emoji: "🥗",
      desc: "Salladsbuffé med nykött",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#005293] via-[#003d73] to-[#002855] text-white">
        {/* Decorative Spades */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute left-10 top-20 text-[120px]">♠</div>
          <div className="absolute bottom-20 right-20 text-[100px]">♠</div>
          <div className="absolute right-1/4 top-1/2 text-[80px]">♠</div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32 lg:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left Content */}
            <div>
              <span className="mb-6 inline-block rounded-full bg-[#FECC00] px-4 py-1.5 text-sm font-bold text-[#002855]">
                🔥 ÖSTERSUNDS BÄSTA PIZZA
              </span>

              <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl">
                Äkta Italiensk
                <span className="block text-[#FECC00]">Pizza i Hjärtat</span>
                <span className="block">av Sverige</span>
              </h1>

              <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-200">
                Varje pizza bakas med kärlek i vår stenugn. Färska ingredienser,
                traditionella recept och svensk passion sedan 2010.
              </p>

              <div className="mb-12 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#FECC00] px-8 py-4 text-lg font-bold text-[#002855] shadow-lg transition hover:-translate-y-1">
                  Beställ Online
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-[#005293]">
                  Se Menyn
                </button>
              </div>

              <div className="mb-6 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-[#FECC00] text-[#FECC00]" />
                  <span className="text-sm font-semibold">4.8/5.0</span>
                  <span className="text-sm text-slate-300">(1,247 recensioner)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#FECC00]" />
                  <span>Leverans på 30 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#FECC00]" />
                  <span>Regeringsgatan 5</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
                  alt="Delicious pizza"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/50 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 rounded-2xl bg-white p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#005293]">20%</div>
                    <div className="text-xs font-bold text-slate-600">RABATT</div>
                    <div className="text-xs text-slate-500">första beställningen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Populära Rätter Section - From the other design */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Populära rätter</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
              Några av favoriterna från vår meny. Alla pizzor bakas med kärlek och svenska råvaror.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dishes.map((dish) => (
              <article
                key={dish.name}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Tag Badge */}
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 shadow-lg">
                    <span className="text-sm">{dish.emoji}</span>
                    <span className="text-xs font-bold text-slate-900">{dish.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{dish.name}</h3>
                  <p className="mb-4 text-sm text-slate-600">{dish.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#005293]">{dish.price}</span>
                    <button className="rounded-full bg-[#005293] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#003d73]">
                      Lägg till
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-3 font-semibold text-slate-900 shadow-sm transition hover:border-[#005293] hover:text-[#005293]"
            >
              Se hela menyn
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Promo Grid - Swiggy Style */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid auto-rows-[240px] gap-6 md:grid-cols-4">
            {/* Big Yellow Block */}
            <div className="relative flex flex-col justify-end overflow-hidden rounded-3xl bg-[#FECC00] p-8 shadow-md transition hover:-translate-y-1 md:col-span-2 md:row-span-2">
              <h2 className="text-4xl font-extrabold leading-tight text-[#002855]">
                Beställ <br /> din favoritpizza
              </h2>
              <p className="mt-2 text-sm font-medium text-[#002855]/70">
                Snabb leverans • Alltid varmt
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#005293] px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5">
                Beställ nu
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Deal Card */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#005293] p-6 text-white shadow-md transition hover:-translate-y-1">
              <div>
                <h3 className="text-xl font-bold">20% Rabatt</h3>
                <p className="text-sm text-white/80">På alla pan pizzor</p>
              </div>
              <span className="mt-auto text-3xl font-bold">🔥</span>
            </div>

            {/* Pizza Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1605276373954-e59c0c2985d8?auto=format&fit=crop&w=1000&q=60"
                alt="pizza"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Barnmeny */}
            <div className="relative flex items-center overflow-hidden rounded-3xl bg-[#F5E6D3] p-8 shadow-md transition hover:-translate-y-1 md:col-span-2">
              <div className="max-w-xs">
                <h3 className="text-3xl font-extrabold text-[#002855]">Barnmeny</h3>
                <p className="mt-2 text-sm text-[#002855]/70">
                  Små portioner • Goda smaker
                </p>
              </div>

              <div className="relative ml-auto h-40 w-40">
                <img
                  src="https://images.unsplash.com/photo-1618213837799-287f52f6a8d3?auto=format&fit=crop&w=600&q=60"
                  alt="kids pizza"
                  className="h-full w-full rounded-full object-cover shadow-md"
                />
              </div>
            </div>

            {/* Find Location */}
            <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#002855]">
                Hitta närmaste Spaderkung
              </h3>
              <input
                placeholder="Postnummer"
                className="mt-4 rounded-xl border border-black/10 px-4 py-2 focus:border-[#005293] focus:outline-none"
              />
              <button className="mt-4 rounded-xl bg-[#005293] px-4 py-2 font-semibold text-white shadow-md transition hover:-translate-y-0.5">
                Sök →
              </button>
            </div>

            {/* Make Your Own */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#8B4513] p-6 text-white shadow-md transition hover:-translate-y-1">
              <div>
                <h3 className="text-xl font-bold">Gör din egen pizza</h3>
                <p className="text-sm text-white/80">
                  Välj deg • Välj toppings • Klart!
                </p>
              </div>
              <span className="mt-auto text-3xl">🍕</span>
            </div>

            {/* Catering Service */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#005293] to-[#003d73] p-6 text-white shadow-md transition hover:-translate-y-1">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold">Catering & Event</h3>
                  <p className="mt-2 text-sm text-white/90">
                    Perfekt för företag och fester
                  </p>
                </div>
                <button className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#005293] transition hover:bg-[#FECC00] hover:text-[#002855]">
                  Läs mer
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Lunch Erbjudande */}
            <div className="relative overflow-hidden rounded-3xl bg-[#FECC00] p-6 shadow-md transition hover:-translate-y-1">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-[#002855] px-3 py-1 text-xs font-bold text-white">
                    LUNCH
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#002855]">Pizza + Dryck</h3>
                  <p className="mt-2 text-sm font-semibold text-[#002855]">
                    Endast 99 kr
                  </p>
                  <p className="text-xs text-[#002855]/70">Måndag - Fredag 11-14</p>
                </div>
              </div>
            </div>

            {/* Student Rabatt */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-purple-800 p-6 text-white shadow-md transition hover:-translate-y-1">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="text-3xl">🎓</span>
                  <h3 className="mt-2 text-xl font-bold">Studentrabatt</h3>
                  <p className="mt-2 text-sm text-white/90">
                    15% på alla pizzor med giltigt studentkort
                  </p>
                </div>
              </div>
            </div>

            {/* App Download */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-md transition hover:-translate-y-1">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="text-3xl">📱</span>
                  <h3 className="mt-2 text-xl font-bold">Ladda ner vår app</h3>
                  <p className="mt-2 text-sm text-white/80">
                    Beställ snabbare & få exklusiva erbjudanden
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 text-xs">
                    <span>📱</span>
                    <span>iOS</span>
                  </div>
                  <div className="flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 text-xs">
                    <span>🤖</span>
                    <span>Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FECC00]">
                <Clock className="h-6 w-6 text-[#002855]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Snabb leverans</h3>
              <p className="text-slate-600">
                Pizza på din dörr inom 30 minuter eller pengarna tillbaka
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FECC00]">
                <Star className="h-6 w-6 text-[#002855]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Högsta kvalitet</h3>
              <p className="text-slate-600">
                Endast färska ingredienser från lokala leverantörer
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FECC00]">
                <Phone className="h-6 w-6 text-[#002855]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">24/7 Support</h3>
              <p className="text-slate-600">
                Alltid tillgängliga för att hjälpa dig med din beställning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section - Rechts Onder */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#005293] to-[#002855] py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 text-[200px]">♠</div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
                Boka ditt <span className="text-[#FECC00]">nästa event</span> hos oss
              </h2>
              <p className="mb-8 text-lg text-slate-200">
                Perfekt för födelsedagar, företagsevent eller bara en mysig kväll med vännerna. 
                Vi har plats för upp till 50 personer i vår mysiga restaurang.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#FECC00] px-8 py-4 font-bold text-[#002855] shadow-lg transition hover:-translate-y-1">
                  Boka nu
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#005293]">
                  <Phone className="h-5 w-5" />
                  Ring oss
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
                  alt="Restaurant interior"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}