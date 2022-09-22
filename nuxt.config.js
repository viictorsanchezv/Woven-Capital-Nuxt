require('dotenv').config()
const client = require('./plugins/contentful')

export default {
  generate: { fallback: true },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
   
    title: "Woven Capital Management Company, LLC",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content:
          "Woven Capital Management Company, LLC, Venture Capital and Private Equity Principals, Woven Capital, Toyota motor corporation, TRI-AD, Woven Alpha, Woven Core",
      },
      {
        name: "description",
        content:
          "Woven Capital, a subsidiary of Toyota, invests in growth-stage companies that are developing innovative technologies and business models in areas such as autonomous mobility, automation, artificial intelligence, machine learning, data and analytics, connectivity, and smart cities.",
      },
      {
        name: "copyright",
        content:
          "(C) Woven Capital Management Company, LLC. All Rights Reserved.",
      },

      { name: "author", content: "Woven Capital Management Company, LLC" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      { hid: "og:title", content: "Woven Capital Management Company, LLC" },
      { hid: "og:type", content: "website" },
      {
        hid: "og:image",
        content:
          "https://images.ctfassets.net/jd4luwtpe1x4/1swjfQXNi7LVZbIh23rXgq/332879c3a490c818867326559e586053/logo_image.jpg",
      },
      { hid: "og:url", content: "https://woven.vc/" },
      { hid: "og:site_name", content: "Woven Capital" },
      {
        hid: "og:description",
        content:
          "Woven Capital, a subsidiary of Toyota, invests in growth-stage companies that are developing innovative technologies and business models in areas such as autonomous mobility, automation, artificial intelligence, machine learning, data and analytics, connectivity, and smart cities.",
      },

      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image:alt",
        content: "Woven Capital Management Company, LLC.",
      },
      {
        name: "twitter:title",
        content: "Woven Capital Management Company, LLC.",
      },
      {
        name: "twitter:description",
        content:
          "Woven Capital, a subsidiary of Toyota, invests in growth-stage companies that are developing innovative technologies and business models in areas such as autonomous mobility, automation, artificial intelligence, machine learning, data and analytics, connectivity, and smart cities.",
      },
      {
        name: "twitter:image",
        content:
          "https://images.ctfassets.net/jd4luwtpe1x4/1swjfQXNi7LVZbIh23rXgq/332879c3a490c818867326559e586053/logo_image.jpg",
      },
    ],
    htmlAttrs: {
      lang: 'en'
    },
    loading: false,
   
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&display=swap'}
    ], 
    scripts: [
      
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap-vue',
    '@/plugins/contentful.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv', '@nuxtjs/markdownit',
  ],
  markdownit: {
    injected: true,
    breaks: false,
    runtime: true,
    html: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
