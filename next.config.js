const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/1.10',
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  images: {
    unoptimized: true
  }
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/essentials-for-yoothemepro',
  //       permanent: false,
  //     }
  //   ]
  // }
  // ,async rewrites() {
  //   return [
  //     {
  //       source: '/essentials-for-yoothemepro',
  //       destination: '/',
  //     },
  //   ]
  // },
}

module.exports = withMarkdoc()(nextConfig)
