export default {
  buildDir: 'C:\\xampp\\htdocs\\salehunter.net',
  env: {
    FB_APP_ID: process.env.FB_APP_ID || '374867146889272',
    FB_SECRET: process.env.FB_SECRET || '67d27515cb95019d99f4a30ce0ccdccf',
    FB_VERSION: process.env.FB_VERSION || 'v8.0',
    API_URL: process.env.API_URL || 'http://localhost:8000/api/'
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  router: {
    // middleware: ['auth']
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
    '@/plugins/facebook-sdk'
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
  axios: {},

  auth: {
    strategies: {
      laravelJWT: {
        provider: 'laravel/jwt',
        url: 'http://localhost:8000',
        token: {
          property: 'access_token',
          maxAge: 24 * 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        }
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  }

}
