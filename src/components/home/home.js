import UserSelector from "./userSelector";

export default {
  name: 'home',
  components: {
    userSelector: UserSelector
  },
  props: [],
  data () {
    return {
      e1: 0,
      done: false,
      products: [],
      selectedUser: {}
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    selectUser(user) {
      this.$session.set("user", user.name)
    } 
  },
  created () {
    this.$http.get('products.json')
      .then((response) => {
        if (response.body.error !== 0) {
          console.log(response.body)
        } else {
          console.log(response.body)
        }    
      }, (error) => {
        console.log(error)
      })

      // this.$http.post('products.json', {
      //   name: "Pincho de Tortilla",
      //   price: 1.2
      // }).then(response => {
      //     console.log(response)
      //   }, reject => {
      //     console.log("Error: ", reject)
      //   })

      // this.$session.set("user", "Iván")
      console.log(this.$session.getAll())
  }
}
