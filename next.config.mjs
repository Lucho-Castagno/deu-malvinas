/** @type {import('next').NextConfig} */
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

export default nextConfig;