// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // ============ Project Css  ============ //
  css: ['~/assets/css/main.css'],


  // ============ Modules Registeration ============ //
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // ============ Modules Configurations ============ //

  tailwindcss: {
    configPath: 'tailwind.config',
  },

  googleFonts: {
    fontsDir: '~/assets/fonts',
    base64: false,

    families: {
      Rubik: {
        wght: [400, 500, 600, 700],
      },
    },
    display: 'swap',
  },
})
