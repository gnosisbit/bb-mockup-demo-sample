"use strict";
process.env.DEBUG = 'nuxt:*'

const App = require('../app');
const mailGun = require('../lib/mailgun');
const RSS = require('rss');

let VueAxios = require( 'vue-axios');
let axios=require('axios');
//const Nuxt = require('nuxt')
let { Nuxt, Builder } = require('nuxt');

// Launch nuxt build with given options
let nconfig = require('./nuxt.config.js')
let nuxt = new Nuxt(nconfig)
nconfig.dev = !(process.env.NODE_ENV === 'production');
//if (nconfig.dev) {
  const builder = new Builder(nuxt);
  //builder.build();
//}

//Vue.use(VueAxios, axios)
/*
let { Nuxt, Builder } = require('nuxt');

// Import and Set Nuxt.js options
let nconfig = require('../nuxt.config.js');
nconfig.dev = !(process.env.NODE_ENV === 'production');

// Init Nuxt.js
const nuxt = new Nuxt(nconfig);
//;;;;;; Build only in dev mode
if (nconfig.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}
*/

////let VueAxios = require( 'vue-axios');
const VueController = App.Controller.extend({
  getVuenuxt: function (req, res, next) {
  /*res.render('site/index',{
    title: App._config.site.title,
    description: App._config.site.description,
    page: 'vuetest'
  });*/


  let layouts = {

  "_default": () => require('./layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default ||m)

  }
  let idxvue4 = {

  "_default": () => require('./pages/test2.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default ||m)

  }

  let idxvue3 = {

  "_default": () => require('./pages/index.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default ||m)

  }


  let hello2 = {

  "_default": () => require('./pages/hello.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default ||m)

  }

  let resolvedLayouts = {}

  //export default {
  //  head: {"title":"my-project","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},
  /******************************************************************************/
  ///const testFolder = './';
  const fs = require('fs');
/*
  fs.readdirSync(testFolder).forEach(file => {
    console.log(file,);
  });
  /*let maapp = new Buffer(require('fs').readFileSync('./components/app.vue', 'utf-8')).toString();//require();

   let idxvue= new Buffer(require('fs').readFileSync('./pages/index.vue', 'utf-8')).toString();
   let idxvue2= new Buffer(require('fs').readFileSync('./pages/test2.vue', 'utf-8')).toString();
   let hello= new Buffer(require('fs').readFileSync('./pages/hello.vue', 'utf-8')).toString();
*/
    let Vue = require("vue");
    /*
      var  VueRouter = require("vue-router"),
        renderers = require("vue-server-renderer"),
        renderer = renderers.createRenderer(),
        router = new VueRouter({
            routes: [
              {
                  path: '/',
                  component: index//{ template: ''+hello }
              },
              {
                  path: '/vuetest',
                  component: { template: ''+idxvue }
              },
              {
                path: '/vuetest/t1',
                component: { template: ''+idxvue }
            },{
                path: '/vuetest/t2',
                component: { template: ''+idxvue2 }
            },{
                path: '/vuetest/t3',
                component: { template: ''+idxvue3 }
            },{
                path: '/vuetest/t4',
                component: { template: ''+idxvue4 }
            },/*{
                path: '/vuetest/t5',
                component: { template: ''+idxvue5 }
            },{
                path: '/vuetest/t6',
                component: { template: ''+idxvue6 }
            },*/

  /*            {
                path: '/vuetest/d1',
                component: { template: ""+idxvue }
            },{
                path: '/vuetest/d2',
                component: { template: ""+idxvue2 }
            },{
                path: '/vuetest/d3',
                component: { template: ""+idxvue3 }
            },{
                path: '/vuetest/d4',
                component: { template: ""+idxvue4 }
            },/*{
                path: '/vuetest/d5',
                component: { template: ""+idxvue5 }
            },{
                path: '/vuetest/d6',
                component: { template: ""+idxvue6 }
            },*/
    /*         {
                path: '/vuetest/test/',
                component: { template: '<div>bar</div>'+hello }
            },
             {
                path: '/vuetest/test3/',
                component: { template: ''+hello }
            },
             {
                path: '/vuetest/test2/',
                component: { template: ''+hello2 }
            }/*, {
                path: '/vuetest/*',
                component: { template: 'div>baz</div>' }
            }*//*]
        });
  /*
      routes = [
    {
          //name: 'CreateItem',
          path: '/vuetest',
          //handler:'../.nuxt/App.js',
          component: {template:''+idxvue2}

  //        component: {template:       component: require('../pages/Main.vue').default
  //String(maapp),render :nuxt.render}
      },
      {
        //    name: 'DisplayItem',
            path: '/vuetest/*',
            component: {template:''+idxvue}//require('../pages/index.vue').default
            //component: {template: String(idxvue),render :nuxt.render}
        }
  ];
  const router = new VueRouter({ routes: routes });
*/
  Vue.use(VueAxios, axios);
  //Vue.use(axios);
  //Vue.use(axios, axios)
  //  global.Vue = Vue;
    //Vue.use(VueRouter);
    /* THIS IS THE SOLUTION */
    //router.push('http://localhost:3000'+req.url);

    /*const app = new Vue({
      router
    });//.$mount('#app')
*/

    builder.build()
    .then(() => {
      // You can use nuxt.render(req, res) or nuxt.renderRoute(route, context)
      nuxt.render(req,res,( html, error )=> {
  // You can check error to know if your app displayed the error page for this route
  // Useful to set the correct status status code if an error appended:
  console.log('********',req.url)

  if (error) {
    return res.status(error.statusCode || 500).send(html)
  }
  res.send(html)
}).catch((e) => {
    // An error happened during the build
    console.log('EERROR:',e);
  })
})


    .catch((e) => {
      // An error happened during the build
      console.log('EERROR:',e);
    })

/*


  let  stream = renderer.renderToStream(new Vue({
        template: "<div><router-view></router-view></div>",
        router: router
    }));

/*
    let  stream = renderer.renderToStream(
      //new Vue(Vue.util.extend({ router,render:h=>h(router) }),maapp)//ss.$mount()

      new Vue({template:''+layouts,router: router,render:h=>h(idxvue) }).$mount('#app')
  );
*/
  /*  res.write("<html><head><title>test</title></head><body>");

    stream.on('data', function (chunk) {
        res.write(chunk);
    });

    stream.on('end', function () {
        res.end('</body></html>');
    });
*/
  }

  });

  module.exports = App.addController('VueNuxt', VueController);
