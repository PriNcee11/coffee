export default {
  name: 'my-profile',
  components: {},
  props: [],
  data () {
    return {
      user: {}
    }
  },
  computed: {

  },
  created () {
    this.user = this.$session.get("user")
    console.log(this.user)
  },
  methods: {

  }
}
