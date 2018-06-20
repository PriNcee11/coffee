export default {
  name: 'user-selector',
  components: {},
  props: [],
  data () {
    let srcs = {
      1: '/src/assets/profiles/1.png',
      2: '/src/assets/profiles/2.png',
      3: '/src/assets/profiles/3.png',
      4: '/src/assets/profiles/4.png',
      5: '/src/assets/profiles/5.png'
    }
    return {
      users: [],
      selectedUser: {},
      e11: [],
      people: [
        { name: 'Sandra Adams', avatar: srcs[1] },
        { name: 'Ali Connors', avatar: srcs[2] },
        { name: 'Trevor Hansen', avatar: srcs[3] },
        { name: 'Tucker Smith', avatar: srcs[2] },
        { name: 'Britta Holt', avatar: srcs[4] },
        { name: 'Jane Smith ', avatar: srcs[5] },
        { name: 'John Smith', avatar: srcs[1] },
        { name: 'Sandra Williams', avatar: srcs[3] }
      ]
    }
  },
  computed: {

  },
  created () {
    // this.$http.get('users.json')
    // .then((response) => {
    //   var responseUsers = []
    //   if (response.body.error !== 0) {
    //     for (let key in response.body) {
    //       responseUsers.push(response.body[key])
    //     }
    //     console.log(responseUsers)
    //     this.users = responseUsers
    //   } else {
    //     console.log(response.body)
    //   }    
    // }, (error) => {
    //   console.log(error)
    // })
  },
  methods: {

  }
}
