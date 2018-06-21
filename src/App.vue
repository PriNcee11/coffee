<template>
  <v-app id="app">
    <toolbar></toolbar>
    <router-view/>
  </v-app>
</template>

<script>
import Toolbar from "./components/toolbar";
import store from './vuex/store'

export default {
  components: {
    toolbar: Toolbar,
  },
  store,
  name: 'app',
  data () {
    return {
      title: 'myCoffee',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.divider {
  background-color: lightgray;
}
</style>
