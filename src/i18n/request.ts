// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './confg';

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Await de locale (Next.js 15 requirement)
  const locale = (await requestLocale) || 'se';
  
  // 2. Check of locale geldig is
if (!locales.includes(locale as (typeof locales)[number])) {
  notFound();
}
  // 3. Laad de GLOBALE file (header, footer, common, nav)
  const global = (await import(`../messages/${locale}.json`)).default;

  // 4. Laad de PAGINA-SPECIFIEKE files
  const home = (await import(`../messages/${locale}/home.json`)).default;
  const about = (await import(`../messages/${locale}/about.json`)).default;
  const contact = (await import(`../messages/${locale}/contact.json`)).default;
  const menu = (await import(`../messages/${locale}/menu.json`)).default;

  return {
    locale,        // ← DIT WAS DE MISSING PIECE!
    messages: {
      ...global,
      home,
      about,
      contact,
      menu
    }
  };
});