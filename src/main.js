/*
 * Initialize the vue application.
 */
import Vue from 'vue'

/* ============
 * Configuration and bootstrap
 * ============
 *
 * Import and bootstrap the plugins.
 */
import '@plugins/axios'

import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import VueSession from 'vue-session'

import 'vue-awesome/icons'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import '@/filters'

Vue.use(router)
Vue.use(Vuetify)
Vue.use(VueSession)

Vue.http.options.root = 'https://mycoffee-b8a1b.firebaseio.com';

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export {
  app,
  store,
  router,
};