const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const prod = process.env.NODE_ENV === 'production'

// modification from the original PWA configuration due to an error -> https://github.com/shadowwalker/next-pwa/issues/295
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    mode: 'production',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
  },
  env: {
    BASE_PATH: prod ? 'https://spotlist.xyz' : 'http://localhost:3000',
  },
  images: {
    domains: ['s.gravatar.com'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      parser: {
        amd: false,
      },
    })
    return config
  },
})
