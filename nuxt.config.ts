import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/tailwind.css'],
  modules: ['shadcn-nuxt'],

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