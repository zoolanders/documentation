const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  //       destination: '/essentials-for-yootheme-pro',
  //       permanent: false,
  //     }
  //   ]
  // }
  // ,async rewrites() {
  //   return [
  //     {
  //       source: '/essentials-for-yootheme-pro',
  //       destination: '/',
  //     },
  //   ]
  // },
}

module.exports = withMarkdoc()(nextConfig)
