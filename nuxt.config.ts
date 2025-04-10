import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/tailwind.css'],
  modules: ['shadcn-nuxt'],

  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_GuKbp1Ak459h7zOxgy5lhNB6rfQMiwFZWnCYtuIx0bk',
      posthogHost: 'https://eu.i.posthog.com'
    }
  },

  // SSG Configuration
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/sitemap.xml'
      ]
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})