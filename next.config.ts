/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n/request.ts'
);

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
eslint: {
    ignoreDuringBuilds: true,
  },

  // Add any other Next.js config options here
};

module.exports = withNextIntl(nextConfig);