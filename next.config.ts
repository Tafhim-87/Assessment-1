/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ⚡ Performance: Enable compression & optimize images
  compress: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // ⚡ Caching: Long-term cache for static assets
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
        ],
      },
    ];
  },
  // ⚡ Load balancing: Modularize imports for smaller bundles
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

module.exports = nextConfig;