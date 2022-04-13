<template>
  <div v-for="result in results" :key="result.id">
    <p>{{result.name}},{{result.score}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'GetLeaderboard',
  data(){
      return{
          posts:[],
          results:[],
      }
  },
  mounted() {
    axios.get('http://localhost:8082/demo/all')
        .then((response)=>{
            this.results = response.data
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
     }
  }
</script>