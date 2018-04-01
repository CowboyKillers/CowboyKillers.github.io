module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cowboy Killers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Welcome to the Wild West', name: 'Welcome to the Wild West', content: '{{ Welcome to the Wild West }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FECADA' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-awesome'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'siimple',
    // CSS file in the project
    '@/node_modules/siimple/dist/siimple.css',
    // SCSS file in the project
    '@/node_modules/siimple/scss/_all.scss'
  ],
  plugins: [
      { src: '~plugins/vue-awesome', ssr: false }
  ],
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Generate location
  */
  generate: {
    dir: 'dist'
  },
}
