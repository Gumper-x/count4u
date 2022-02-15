export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead ? this.$nuxtI18nHead({ addSeoAttributes: true }) : null;
    const headMeta = {
      title: "Count4u",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Бухгалтерский учет" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    };
    if (i18nHead) {
      headMeta.htmlAttrs = { ...headMeta.htmlAttrs, ...i18nHead.htmlAttrs };
      headMeta.htmlAttrs = { ...headMeta.meta, ...i18nHead.meta };
      headMeta.htmlAttrs = { ...headMeta.link, ...i18nHead.link };
    }
    return headMeta;
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.css",
    "@/assets/css/vue-select.css",
    "~/assets/fonts/proxyma-nova/stylesheet.css",
    "~/assets/fonts/mont/stylesheet.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/vue-carousel", mode: "client" }],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/postcss8",
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://i18n.nuxtjs.org
    "@nuxtjs/i18n",
  ],
  i18n: {
    strategy: "prefix",
    langDir: "@/locales/",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en",
      },
      {
        code: "ru",
        iso: "ru-RU",
        file: "ru",
      },
      {
        code: "ua",
        iso: "uk-UA",
        file: "ua",
      },
    ],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
