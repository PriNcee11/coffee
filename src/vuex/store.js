import Vue from 'vue'
import Vuex from 'vuex'

// Haz Vue consciente de Vuex
Vue.use(Vuex)

// Crea un objeto conteniendo el estado inicial
// para cuando la app es iniciada
const state = {
  // TODO: Configurar el estado inicial
}

// Crea un objeto almacenando varias mutaciones. Escribe la mutación
const mutations = {
  // TODO: Configura las mutaciones
}

// Combina el estado inicial y las mutaciones para crear un almacén Vuex
// Este almacén puede puede vincularse a nuestra app
export default new Vuex.Store({
  state,
  mutations
})