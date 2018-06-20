export default {
  name: 'manage-users',
  components: {},
  props: [],
  data () {
    return {
      user: { name: "", role: "common" },
      snackbar: { show: false, color: '', text: '' }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    insertNew() {
      this.$http.post('users.json', this.user)
        .then(response => {
          console.log(response)
          this.snackbar.text = 'User created'
          this.snackbar.color = 'success'
          this.snackbar.show = true
        }, reject => {
          console.log("Error: ", reject)
          this.snackbar.text = 'Error'
          this.snackbar.color = 'error'
          this.snackbar.show = true
        })
    }
  }
}
