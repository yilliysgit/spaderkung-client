// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './confg';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);