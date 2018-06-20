import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
import router from './router'
import Vuetify from 'vuetify'
import VueSession from 'vue-session'

import 'vue-awesome/icons'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(router)
Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueSession)

Vue.http.options.root = 'https://mycoffee-b8a1b.firebaseio.com';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
