// Una acción recibirá el almacén como el primer argumento.
// Puesto que sólo estamos interesados en el despacho (y opcionalmente el estado)
// podemos tirar de esos dos parámetros con la función de desestructuración del ES6
export const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
}