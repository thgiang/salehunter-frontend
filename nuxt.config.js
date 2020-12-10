export default {
  buildDir: 'C:\\xampp\\htdocs\\salehunter.net',
  env: {
    FB_APP_ID: process.env.FB_APP_ID || '388970152181793',
    FB_SECRET: process.env.FB_SECRET || '794ad4423ee211c8c43709d4d8e575c0',
    FB_VERSION: process.env.FB_VERSION || 'v9.0',
    BASE_URL: process.env.BASE_URL || 'https://api.salehunter.net'
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  router: {
    middleware: ['auth']
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'SaleHunter',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/style.css',
    'assets/overwrite-bootstrap.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/facebook-sdk',
    '@/plugins/nice-scroller'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth-next'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://api.salehunter.net' // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/users/login', method: 'post', propertyName: 'token' },
          logout: { url: '/users/logout', method: 'post' },
          user: { url: '/users/me', method: 'get', propertyName: 'user' }
        },
        tokenRequired: true,
        tokenType: false,
        globalToken: true,
        autoFetchUser: true
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  }

}
