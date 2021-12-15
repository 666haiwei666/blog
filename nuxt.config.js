export default {
  head: {
    title: 'foreign-exchange-workbench-ssr',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css',
      },
      {
        rel: 'stylesheet',
        href: '//cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.css',
      },
      {
        rel: 'stylesheet',
        href: '//cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
      },
    ],
    script: [
      {
        src: '//cdn.staticfile.org/jquery/1.10.2/jquery.min.js',
      },
      {
        src: '//cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js',
      },
      {
        src: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
      },
      {
        src: '//cdn.bootcdn.net/ajax/libs/wow/1.1.2/wow.min.js',
      },
      {
        src: 'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/verdor/jquery.scrollUp.min.js?versionId=CAEQGxiBgICajMPv6BciIGIwYmFhM2FkY2E2MDRhMTk4NjQ0NmZjMzEwY2NhOGU0',
      },
      // {
      //   src: 'https://unpkg.com/vue/dist/vue.js',
      // },
      // {
      //   src: 'https://unpkg.com/element-ui@2.15.6/lib/index.js',
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/reset.css', 'assets/color.css', 'assets/common.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/preloader.js',
    '@/plugins/elementUI',
    // { src: '@/plugins/elementUI', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    extend(config, { isDev }) {
      config.externals = {
        jquery: 'jquery',
      }
      // if (isDev) {
      //   config.externals = {
      //     // 'element-ui': 'ELEMENT',
      //   }
      // }
    },
  },
}
