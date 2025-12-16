'use client';

import { useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import SpaderkungLogo from "../../../../../public/assets/spaderkung-logo";
import PhoneAction from "./actions/PhoneAction";
import CtaAction from "./actions/CtaAction";
import { Link } from '@/i18n/routing';
import type { NavItem } from "@/types/header.types";
import { Phone, Clock, MapPin } from "lucide-react";

const languages = [
  { code: 'se', name: 'Svenska', flag: '🇸🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navigation: NavItem[] = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/om-oss' },
    { label: t('menu'), href: '/meny' },
    { label: t('order'), href: '/bestall' },
    { label: t('booking'), href: '/boka-bord' },
    { label: t('contact'), href: '/kontakt' },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
      <header className="w-full bg-gradient-to-r from-white via-gray-50 to-white border-b border-gray-100 shadow-lg shadow-gray-200/20 sticky top-0 z-50 backdrop-blur-sm">
        {/* Top accent line */}
        <div className="w-full h-1 bg-gradient-to-r from-[#005293] via-[#FECC00] to-[#005293]"></div>
        
        <div className="w-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex items-center justify-between py-2 lg:py-3">
            
            {/* Logo - Compact op mobiel, volledig op desktop */}
            <div className="flex-shrink-0 group">
              <Link href="/" className="block transform transition-all duration-300 hover:scale-105">
                {/* Mobiel: Klein vierkant logo */}
                <div className="lg:hidden">
                  <SpaderkungLogo
                    width={45}
                    squareColor="#FECC00"
                    textColor="#2d3748"
                    markColor="#ffffff"
                  />
                </div>
                {/* Desktop: Volledig logo */}
                <div className="hidden lg:block">
                  <SpaderkungLogo
                    className="w-52 xl:w-60 h-auto drop-shadow-sm"
                    squareColor="#FECC00"
                    textColor="#2d3748"
                    markColor="#ffffff"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block flex-1">
              <div className="flex items-center justify-center gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50/80 hover:shadow-sm text-gray-700 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <PhoneAction />
              <CtaAction />
              
              {/* Language Switcher Desktop */}
              <select
                value={locale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm md:text-base font-medium text-gray-700 hover:text-[#005293] transition-colors cursor-pointer border border-gray-200 bg-white"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Actions - CTA, Taal, Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Bestel Nu Button - Compact */}
              <Link
                href="/bestall"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FECC00] px-4 py-2 text-sm font-bold text-[#002855] shadow-md hover:bg-[#ffd700] transition-all duration-200 hover:shadow-lg whitespace-nowrap"
              >
                <span className="hidden xs:inline">Beställ nu</span>
                <span className="xs:hidden">🛒</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Language Switcher - Compact met alleen vlag */}
              <select
                value={locale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="rounded-lg px-2 py-2 text-lg border border-gray-200 bg-white cursor-pointer hover:border-[#005293] transition-colors"
                aria-label="Select language"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag}
                  </option>
                ))}
              </select>

              {/* Hamburger Menu */}
              <button
                type="button"
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Open navigation menu"
                onClick={() => setMobileOpen(true)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu - NIEUWE VERBETERDE VERSIE */}
      {mobileOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 z-[9998]"
            onClick={() => setMobileOpen(false)}
          />
          
          {/* Slide-in Panel */}
          <div className="fixed inset-y-0 right-0 z-[9999] w-full max-w-sm bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              
              {/* Header van Panel */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gradient-to-r from-[#005293] to-[#003d73]">
                <Link 
                  href="/" 
                  onClick={() => setMobileOpen(false)}
                  className="block"
                >
                  <SpaderkungLogo
                    width={160}
                    squareColor="#FECC00"
                    textColor="#ffffff"
                    markColor="#ffffff"
                  />
                </Link>
                <button
                  type="button"
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div>
                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between w-full px-5 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <span>{item.label}</span>
                      <svg 
                        className="w-5 h-5 text-[#005293]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Footer - Verbeterde versie met microcopy */}
              <div className="border-t border-gray-200 p-5 space-y-4 bg-gray-50">
                {/* Bestel Nu CTA met microcopy */}
                <div>
                  <Link
                    href="/bestall"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#FECC00] text-[#002855] font-bold text-lg rounded-xl shadow-lg hover:bg-[#ffd700] transition-all"
                  >
                    <span>Beställ nu</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <p className="text-xs text-center text-gray-500 mt-2">
                    Snabb leverans · Varje dag till 21:45
                  </p>
                </div>

                {/* Telefoon met microcopy */}
                <div>
                  <a 
                    href="tel:063-514011"
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 hover:border-[#005293] transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-[#005293] rounded-full">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500 font-medium">Ring direkt</div>
                      <div className="text-base font-bold text-gray-900">063-51 40 11</div>
                    </div>
                  </a>
                  <p className="text-xs text-center text-gray-500 mt-2">
                    Vi svarar alltid snabbt
                  </p>
                </div>

                {/* Info cards in grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                    <Clock className="w-5 h-5 text-[#005293] mx-auto mb-1" />
                    <p className="text-xs font-semibold text-gray-700">Öppet till</p>
                    <p className="text-sm font-bold text-[#005293]">21:00</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                    <MapPin className="w-5 h-5 text-[#005293] mx-auto mb-1" />
                    <p className="text-xs font-semibold text-gray-700">Centralt</p>
                    <p className="text-sm font-bold text-[#005293]">Östersund</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}