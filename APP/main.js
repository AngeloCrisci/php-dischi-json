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
    axios.get('http://localhost/php-dischi-json/FUNCTIONS/functions.php')
        .then(  response => {
            this.discs = response.data;
        console.log('RISPOSTA',response.data);
        })
        .catch(function (error) {
        console.log(error);
        })
  }
}).mount('#app')