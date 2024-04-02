// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // ============ Project Css  ============ //
  css: ['~/assets/css/main.css'],


  // ============ Modules Registeration ============ //
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxt/ui',
    'nuxt-aos',
    'nuxt-marquee',
    'nuxt-swiper',
  ],

  // ============ Modules Configurations ============ //

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.pcss', { injectPosition: "first" }],
    configPath: 'tailwind.config',
  },

  googleFonts: {
    families: {
      Rubik: {
        wght: [400, 500, 600, 700],
      },
    },
    display: 'swap',
  },

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize 
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },

  // ============ General Configurations ============ //
  colorMode: {
    classSuffix: '',
    preference: 'light'
  },

  typescript: {
    shim: false,
  },

  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
      }
    ]
  },
})
