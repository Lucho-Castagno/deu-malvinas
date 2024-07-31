/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://www.bienestar.mil.ar/malvinas/geojson/:path*', // Proxy to external URL
      },
    ];
  },
  images: {
    domains: ['www.bienestar.mil.ar'],
  },
};

export default withNextIntl(nextConfig);