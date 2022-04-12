const { i18n } = require('./next-i18next.config');

module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
  i18n, 
  
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    ignoreDuringBuilds: true,

  },
  
};