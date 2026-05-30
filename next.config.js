/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [
      'cdn.galaxy.eco',
      'cdn1.p12.games',
      'cdn.p12.games',
      'cdn.galxe.com',
      'cdn-2.galxe.com',
      'd257b89266utxb.cloudfront.net',
    ],
  },
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 120,
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
      },
    ];
  },
};
