/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable modern image formats
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eminentdiplomats.org',
      },
      {
        protocol: 'https',
        hostname: 'www.eminentdiplomats.org',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@heroicons/react',
      'framer-motion',
    ],
  },
};

module.exports = nextConfig;
