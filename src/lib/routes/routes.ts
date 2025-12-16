// 📍 lib/routes/routes.ts
// Centraal overzicht van alle routes in de applicatie

export const ROUTES = {
  HOME: '/',
  OM_OSS: '/om-oss',
  MENY: '/meny',
  BESTÄLLA: '/bestall',
  BOKA: '/boka-bord',
  KONTAKT: '/kontakt',
} as const;

// Type voor type-safe routing
export type RouteKey = keyof typeof ROUTES;
export type RouteValue = typeof ROUTES[RouteKey];