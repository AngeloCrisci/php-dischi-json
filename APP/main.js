const { createApp } =  Vue;

const app = createApp({
  data() {
    return {
      discs: [],
    }
  },
  methods: {
   
  },
  created(){
    axios.get()
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
  }
}).mount('#app')