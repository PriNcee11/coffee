import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'vue-awesome/icons'
import 'vuetify/dist/vuetify.min.css'


Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
