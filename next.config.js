// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
  // images: {
  //   loader: 'imgix',
  //   path: '/',
  // },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  /* config options here */
}

module.exports = nextConfig
