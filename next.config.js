/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rules: {
    '@next/next/no-css-tags': false
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'instagram.fhan9-1.fna.fbcdn.net'
    ],
  }
}