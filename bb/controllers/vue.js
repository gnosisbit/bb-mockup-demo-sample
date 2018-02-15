"use strict";

const App = require('../app');
const mailGun = require('../lib/mailgun');
const RSS = require('rss');

let VueAxios = require( 'vue-axios');
let axios=require('axios');
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
let idxvue2 = {

"_default": () => require('./pages/index.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default ||m)

}

let resolvedLayouts = {}

//export default {
//  head: {"title":"my-project","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},
/******************************************************************************/
/*const testFolder = './';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
  console.log(file,);
});*/
let maapp = new Buffer(require('fs').readFileSync('./components/app.vue', 'utf-8')).toString();//require();

var buffer = new Buffer(require('fs').readFileSync('./pages/index.vue', 'utf-8'));
let idxvue= buffer.toString();

  var Vue = require("vue"),
      VueRouter = require("vue-router"),
      renderers = require("vue-server-renderer"),
      renderer = renderers.createRenderer(),
  /*    router = new VueRouter({
          routes: [{
              path: '/vuetest/',
              component: { template: '<div>foo</div>' }
          }, {
              path: '/vuetest/test/',
              component: { template: '<div>bar</div>' }
          }, {
              path: '/vuetest/*',
              component: { template: '<div>baz</div>' }
          }]
      });
*/
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
Vue.use(VueAxios, axios);
//Vue.use(axios);
//Vue.use(axios, axios)
//  global.Vue = Vue;
  Vue.use(VueRouter);
  /* THIS IS THE SOLUTION */
  console.log(router,req.url)
  router.push('http://localhost:3000'+req.url);

let  stream = renderer.renderToStream(new Vue({
      template: "<div><router-view></router-view></div>",
      router: router
  }));
/*

  let  stream = renderer.renderToStream(
    new Vue(Vue.util.extend({ router,render:h=>h(router) }),maapp)//ss.$mount()

    //new Vue({template:''+layouts,router: router,render:h=>h(idxvue) }).$mount('#app')
);
*/
  res.write("<html><head><title>test</title></head><body>");

  stream.on('data', function (chunk) {
      res.write(chunk);
  });

  stream.on('end', function () {
      res.end('</body></html>');
  });

},
  getVuenuxt2: function (req, res, next) {
    //nuxt.render(req.url);

/******************************************************************************/

let layouts = {

"_default": () => require('./layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default ||m)

}
let idxvue2 = {

"_default": () => require('./pages/index.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default ||m)

}

let resolvedLayouts = {}

//export default {
//  head: {"title":"my-project","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},
/******************************************************************************/
/*const testFolder = './';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
  console.log(file,);
});*/
let maapp = new Buffer(require('fs').readFileSync('./components/app.vue', 'utf-8')).toString();//require();

var buffer = new Buffer(require('fs').readFileSync('./pages/index.vue', 'utf-8'));
let idxvue= buffer.toString();
/**//*
//console.log(idxvue);
///let CreateItem =String(require('../layouts/default.vue'));
//let DisplayItem=String(require('../pages/index.vue'));
//import CreateItem from '../layouts/default.vue';
//import DisplayItem from '../pages/index.vue';
const routes = [
  {
        //name: 'CreateItem',
        path: '/vuetest',
        //handler:'../.nuxt/App.js',
        component: {template:idxvue}// require('../pages/index.vue').default

//        component: {template:       component: require('../pages/Main.vue').default
//String(maapp),render :nuxt.render}
    },
    {
      //    name: 'DisplayItem',
          path: '/vuetest/*',
          component: {template:idxvue}//require('../pages/index.vue').default
          //component: {template: String(idxvue),render :nuxt.render}
      }
];
const router = new VueRouter({ routes: routes });

let renderers = require("vue-server-renderer"),
    renderer = renderers.createRenderer();
  Vue.use(VueRouter);*/
/*
  let  stream = renderer.renderToStream(
    new Vue(Vue.util.extend({ router }), layouts)

//    new Vue({template:layouts,router: router,render:h=>h(idxvue) })
//    .$mount('#app')
);*/

var Vue = require("vue"),
    VueRouter = require("vue-router"),
    renderers = require("vue-server-renderer"),
    renderer = renderers.createRenderer()
/*/    router = new VueRouter({
        routes: [{
            path: '/vuetest/',
            component: { template: '<div>foo</div>' }
        }, {
            path: '/vuetest/test/',
            component: { template: '<div>bar</div>' }
        }, {
            path: '/vuetest/*',
            component: { template: '<div>baz</div>' }
        }]
    });

//  global.Vue = Vue;
*/
//ssssssssssssssssssssssssssssVue.use(nuxt.router);
/*
let  stream = renderer.renderToStream(new Vue({
    template: "<div><router-view></router-view></div>",
    router: router
}));
*/
/* THIS IS THE SOLUTION */
//router.push(req.url);
//  let  stream = renderer.renderToStream(new Vue({
  //let server = require('express')();
//  server.use(nuxt.render);
//let stream =renderer.renderToStream(new Vue({template:layouts,router: router,render:h=>h(idxvue)}));
//let stream =renderer.renderToStream(new Vue({template:nuxt.render,router: nuxt._router}));//,render:h=>h(nuxt.render)}));
//  let stream =nuxt.render({template:idxvue});////new Vue({template:layouts,router: router,render:h=>h(idxvue)}).$mount('#app'));
//console.log(

//let stream=renderer.renderToStream(nuxt.renderRoute('/'));
//nuxt._router.push('/');
let stream=renderer.renderToString(nuxt.render(new Vue({template:layouts,render:h=>h(idxvue)})));
//res.status(200).send(nuxt.renderRoute('/'));
 /*
let stream = nuxt.render(new Vue({
          template: maapp,// "<div><router-view></router-view></div>",
          router: router
      })//.$mount('#app')
    );

    *///console.log(stream);
      /* THIS IS THE SOLUTION */
      //router.push(req.url);
  //    res.write(stream);

  res.write("<html><head><title>test</title></head><body>");
  //res.write(idxvue);
  /*stream.on('data', function (chunk) {
      console.log(chunk);
        res.write(chunk);
    });
***/
    /**/
    //stream.on('end', function () {
res.write(JSON.stringify(stream));
        res.end('</body></html>');
//});

//    nuxt.render('/vuetest/');
//App.use(nuxt.render);
//res.render('/');
/*
    console.log('/');
    nuxt.renderRoute('pages/index') ;
      console.log(req.url);
////////next();
/*let index = '@../pages/index.vue';
var Vue = require("vue"),
    VueRouter = require("vue-router"),
    renderers = require("vue-server-renderer"),
    renderer = renderers.createRenderer();

    /*let router = new VueRouter({
        routes: [{
            //path: '/vuetest/',
            name: 'index',
            path: '/vuetest/',
            component: index
        }]
      });*/
  /*  Vue.use(VueRouter);

  let  stream = renderer.renderToStream(new Vue({
        template: "<div><router-view></router-view></div>",
        router: nuxt.router
    }));

    /* THIS IS THE SOLUTION */
  //  $nuxt._router.push(req.url);

  /*  router = new VueRouter({
        routes: [{
            path: '/vuetest/',
            component: index
          //handler:nuxt.render
        }]
    });*/

  /*  res.write("\n");//<html><head><title>test</title></head><body>");

    stream.on('data', function (chunk) {
        res.write(chunk);
    });

    stream.on('end', function () {
        res.end('\n');//</body></html>');
    });

//    nuxt.render('/vuetest/');
//App.use(nuxt.render);
//res.render('/');*/
},
getVue: function (req, res, next) {
//let Vue = require('vue');

//  let VueRouter = require( 'vue-router');
  //Vue.use(VueRouter);

/*res.render('site/index',{
  title: App._config.site.title,
  description: App._config.site.description,
  page: 'vuetest'
});*/
var Vue = require("vue"),
    VueRouter = require("vue-router"),
    renderers = require("vue-server-renderer"),
    renderer = renderers.createRenderer(),
    router = new VueRouter({
        routes: [{
            path: '/vuetest/',
            component: { template: '<div>foo</div>' }
        }, {
            path: '/vuetest/test/',
            component: resolve('../pages/hello.vue')//{ template: '<div>bar</div>' }
        }, {
            path: '/vuetest/*',
            component: { template: '<div>baz</div>' }
        }]
    });

//  global.Vue = Vue;
Vue.use(VueRouter);

let  stream = renderer.renderToStream(new Vue({
    template: "<div><router-view></router-view></div>",
    router: router
}));

/* THIS IS THE SOLUTION */
router.push(req.url);

res.write("<html><head><title>test</title></head><body>");

stream.on('data', function (chunk) {
    res.write(chunk);
});

stream.on('end', function () {
    res.end('</body></html>');
});

},
getVueApp: function (req, res, next) {
/*res.render('site/index',{
  title: App._config.site.title,
  description: App._config.site.description,
  page: 'vuetest'
});*/


let layouts = {

"_default": () => require('./layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default ||m)

}
let idxvue2 = {

"_default": () => require('./pages/index2 .vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default ||m)

}

let resolvedLayouts = {}

//export default {
//  head: {"title":"my-project","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},
/******************************************************************************/
/*const testFolder = './';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
console.log(file,);
});*/
let maapp = new Buffer(require('fs').readFileSync('./components/app.vue', 'utf-8')).toString();//require();

var buffer = new Buffer(require('fs').readFileSync('./pages/index.vue', 'utf-8'));
let idxvue= buffer.toString();

var Vue = require("vue"),
    VueRouter = require("vue-router"),
    renderers = require("vue-server-renderer"),
    renderer = renderers.createRenderer(),
/*    router = new VueRouter({
        routes: [{
            path: '/vuetest/',
            component: { template: '<div>foo</div>' }
        }, {
            path: '/vuetest/test/',
            component: { template: '<div>bar</div>' }
        }, {
            path: '/vuetest/*',
            component: { template: '<div>baz</div>' }
        }]
    });
*/
 routes = [
{
      //name: 'CreateItem',
      path: '/vuetest',
      //handler:'../.nuxt/App.js',
      component: {template:''+idxvue2}// require('../pages/index.vue').default

//        component: {template:       component: require('../pages/Main.vue').default
//String(maapp),render :nuxt.render}
  },
  {
    //    name: 'DisplayItem',
        path: '/vuetest/*',
        component:""+idxvue
        //component: {template: String(idxvue),render :nuxt.render}
    }
];
const router = new VueRouter({ routes: routes });
console.log(router);
//  global.Vue = Vue;
Vue.use(VueRouter);

let  stream = renderer.renderToStream(new Vue({
    template: "<div><router-view></router-view></div>",
    router: router
}));

/*
let  stream = renderer.renderToStream(
  new Vue(Vue.util.extend({ router }), layouts)

//    new Vue({template:layouts,router: router,render:h=>h(idxvue) })
//    .$mount('#app')
);*/
/* THIS IS THE SOLUTION */
router.push(req.url);

res.write("<html><head><title>test</title></head><body>");

stream.on('data', function (chunk) {
    res.write(chunk);
});

stream.on('end', function () {
    res.end('</body></html>');
});

}

});

module.exports = App.addController('Vue2', VueController);
