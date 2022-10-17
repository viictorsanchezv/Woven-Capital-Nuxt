const client = require('./plugins/contentful')

export default {
  generate: { fallback: true },
  head: {
    title: "Woven Capital Management Company, LLC.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "copyright",
        content:
          "(C) Woven Capital Management Company, LLC. All Rights Reserved.",
      },
      { name: "author", content: "Woven Capital Management Company, LLC" },
    
      { hid: "og:type", content: "website" },
      
      { hid: "og:url", content: "https://woven.vc/" },
      { hid: "og:site_name", content: "Woven Capital" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image:alt",
        content: "Woven Capital Management Company, LLC.",
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

  css: [
    '@/assets/css/style.css'
  ],

  plugins: [
    '@/plugins/bootstrap-vue',
    '@/plugins/contentful.js',
    {
      src:"plugins/vue-cookies-consent.js", mode:'client'
    }
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
  ],

  markdownit: {
    injected: true,
    breaks: false,
    runtime: true,
    html: true,
  },

  build: {
  }
}