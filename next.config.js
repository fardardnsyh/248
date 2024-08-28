/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    assetPrefix: isProd ? '' : 'http://localhost:3000',
    experimental:{
        appDir: true,
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
      },
    images: { domains: ["lemonsqueezy.imgix.net", "image.tmdb.org", "kaijeng.netlify.app"] },
}


module.exports = nextConfig
