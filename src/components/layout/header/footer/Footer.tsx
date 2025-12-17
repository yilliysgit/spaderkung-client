'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import SpaderkungLogo from '../../../../../public/assets/spaderkung-logo';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background card symbols */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute left-10 top-10 text-[140px] select-none">♠</div>
        <div className="absolute right-20 bottom-10 text-[120px] select-none">♠</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6 py-16">
        {/* TOP GRID */}
        <div className="mb-12 border-b border-white/10 pb-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* BRAND COLUMN */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="inline-block mb-4 transform transition-transform hover:scale-105"
              >
                <SpaderkungLogo
                  width={200}
                  squareColor="#FECC00"
                  textColor="#ffffff"
                  markColor="#ffffff"
                />
              </Link>

              <p className="text-slate-300 leading-relaxed max-w-md">
                {t('description')}
              </p>

              {/* Socials */}
              <h4 className="mt-6 mb-2 text-sm font-bold text-[#FECC00]">
                {t('followUs')}
              </h4>
              <div className="flex gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full 
                    bg-white/10 hover:bg-[#FECC00] hover:scale-110 transition-all group"
                >
                  <svg
                    className="h-5 w-5 text-white group-hover:text-[#002855]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12..." />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full 
                    bg-white/10 hover:bg-[#FECC00] hover:scale-110 transition-all group"
                >
                  <svg
                    className="h-5 w-5 text-white group-hover:text-[#002855]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584..." />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full 
                    bg-white/10 hover:bg-[#FECC00] hover:scale-110 transition-all group"
                >
                  <svg
                    className="h-5 w-5 text-white group-hover:text-[#002855]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825..." />
                  </svg>
                </a>
              </div>

              {/* Payment Methods */}
              <h4 className="mt-8 mb-3 text-sm font-bold text-[#FECC00]">
                {t('payment.title')}
              </h4>

              <div className="flex items-center gap-3">
                <img
                  src="/assets/payments/visa.svg"
                  alt="Visa"
                  className="h-8 opacity-80 hover:opacity-100 transition"
                />
                <img
                  src="/assets/payments/mastercard.svg"
                  alt="Mastercard"
                  className="h-8 opacity-80 hover:opacity-100 transition"
                />
                <img
                  src="/assets/payments/swish.svg"
                  alt="Swish"
                  className="h-8 opacity-80 hover:opacity-100 transition"
                />
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-[#FECC00]">
                {t('quickLinks')}
              </h4>

              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/meny"
                    className="text-slate-300 hover:text-[#FECC00] transition inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100">→</span>
                    {tNav('menu')}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/bestall"
                    className="text-slate-300 hover:text-[#FECC00] transition inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100">→</span>
                    {tNav('order')}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/om-oss"
                    className="text-slate-300 hover:text-[#FECC00] transition inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100">→</span>
                    {tNav('about')}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/kontakt"
                    className="text-slate-300 hover:text-[#FECC00] transition inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100">→</span>
                    {tNav('contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-[#FECC00]">
                {t('contact')}
              </h4>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#FECC00]">📞</span>
                  <a
                    href={`tel:${tCommon('phone')}`}
                    className="text-slate-300 hover:text-[#FECC00]"
                  >
                    {tCommon('phone')}
                  </a>
                </li>

                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-[#FECC00]">📍</span>
                  {tCommon('fullAddress')}
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#FECC00]">📧</span>
                  <a
                    href={`mailto:${tCommon('email')}`}
                    className="text-slate-300 hover:text-[#FECC00]"
                  >
                    {tCommon('email')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* COPYRIGHT */}
          <div className="text-sm text-slate-400 text-center md:text-left">
            {t('copyright')}
          </div>

          {/* HOURS */}
          <div className="flex items-center gap-4 text-sm">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-slate-400">{t('monFri')}:</span>
              <span className="ml-2 text-white font-semibold">
                {t('hours.monFri')}
              </span>
            </div>

            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-slate-400">{t('satSun')}:</span>
              <span className="ml-2 text-white font-semibold">
                {t('hours.satSun')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
