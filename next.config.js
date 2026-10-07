/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/informations', destination: '/about', permanent: true },
      { source: '/our-associates', destination: '/attorneys', permanent: true },
      { source: '/services', destination: '/practice-areas', permanent: true },
    ];
  },
};

module.exports = nextConfig;