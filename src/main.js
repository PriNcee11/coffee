import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

import 'vue-awesome/icons'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(router)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
