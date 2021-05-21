export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "Elwood | Institutional Market Access & Trading Infrastructure for Crypto Assets",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Elwood is a leading cloud native platform leveraging a single API connection to enable FinTechs to offer crypto assets to their customers, asset managers and financial institutions to trade crypto assets in a seamless fashion",
      },
      { name: "msapplication-TileColor", content: "#0F1F47" },
      { name: "theme-color", content: "#1a1a1a" },
    ],
    link: [
      { rel: "canonical", href: "https://www.elwood.io" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/sze5cnz.css" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
    // __dangerouslyDisableSanitizers: ["script"],
    __dangerouslyDisableSanitizersByTagID: {
      "gtm-script": ["innerHTML"],
    },
    script: [
      {
        hid: "gtm-external",
        src: "https://www.googletagmanager.com/gtag/js?id=G-FE9M9HTCNS",
        async: true,
      },
      {
        hid: "gtm-script",
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FE9M9HTCNS');
        `,
        type: "text/javascript",
        charset: "utf-8",
      },
      {
        hid: "hubspot-script",
        src: "//js.hs-scripts.com/19882646.js",
        async: true,
        defer: true,
        body: true,
      },
      {
        src:
          "https://cdn.jsdelivr.net/combine/npm/gsap@3.6.0,npm/@vimeo/player@2.15.0",
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/sanity-blocks.js" },
    {
      src: "@/plugins/locomotive-scroll.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["cookie-universal-nuxt", "@nuxtjs/robots", "@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://www.elwood.io",
    routes: ["/legal/privacy-policy", "legal/disclaimer"],
  },
  robots: {
    UserAgent: "*",
    Disallow: "",
    Sitemap: "https://www.elwood.io/sitemap.xml",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ["gsap"],
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) =>
        rule.test.test(".svg")
      );

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: ["babel-loader", "vue-svg-loader"],
          },
          {
            loader: "file-loader",
            query: {
              name: "assets/[name].[hash:8].[ext]",
            },
          },
        ],
      });
    },
    generate: { fallback: false },
    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  /*  server: {
    host: "0.0.0.0",
  }, */
};
