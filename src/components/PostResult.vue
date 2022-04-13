<template>
  <div>
    <button @click="postresults">post results</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostResult',
  data(){
      return{
          form: {
                name: 'Cas',
                score: '5'
            }
      }
  },
  methods: {  
    postresults() {
        axios.post('http://localhost:8082/demo/add', this.form,)
    }
  }
}
</script>
