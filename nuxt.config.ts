// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@pinia/nuxt'],

  css: ['@/assets/css/global.css'],

  colorMode: {
    preference: 'light',
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },
});