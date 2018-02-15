module.exports = {
  head: {
    title: 'Test technique Totem / Ingima',
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.slim.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css' }
    ]
  },
  css: ['~assets/css/main.css'],
  loading: { color: '#3B8070' },
  //plugins: ['~plugins/axios','~plugins/vue-notifications'],
  /*router: {
    base: '/vuetest/'
  },*//*
  router: {
   extendRoutes (routes, resolve) {
     routes.push(  {
           path: '/',
           component: resolve('pages/hello.vue')
       },
       {
           path: '/vuetest',
           component: resolve('pages/index.vue')
       },
       {
         path: '/vuetest/t1',
         component: resolve('pages/index.vue')
     },{
         path: '/vuetest/t2',
         component: resolve('pages/index2.vue')
     },{
         path: '/vuetest/t3',
         component: resolve('pages/hello.vue')
     },{
         path: '/vuetest/t4',
         component: resolve('pages/404.vue')
     },{
         path: '/vuetest/t5',
         component: { template: ''+idxvue5 }
     },{
         path: '/vuetest/t6',
         component: { template: ''+idxvue6 }
     },

       {
         path: '/vuetest/d1',
         component: resolve('pages/index.vue')
     },{
         path: '/vuetest/d2',
         component: resolve('pages/404.vue')
     },{
         path: '/vuetest/d3',
         component: resolve('pages/404.vue')
     },{
         path: '/vuetest/d4',
         component: resolve('pages/404.vue')
     },{
         path: '/vuetest/d5',
         component: { template: ""+idxvue5 }
     },{
         path: '/vuetest/d6',
         component: { template: ""+idxvue6 }
     },
      {
         path: '/vuetest/test/',
         component: resolve('pages/3index.vue')
     },
      {
         path: '/vuetest/test3/',
         component: resolve('pages/hello.vue')
     },
      {
         path: '/vuetest/test2/',
         component: resolve('pages/index2.vue')
     },{
       name: 'custom404',
       path: '*',
       component: resolve('pages/404.vue')
     })
   }
 },*/
  build: {
    vendor: [
    'axios',
      'lodash'
      //'vue-notifications'
    ]
  },
  env: {
    url: 'http://localhost:3000',
    port: 3000
  }
};
