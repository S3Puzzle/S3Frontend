<template>
  <div v-for="result in results" :key="result.id">
    <p>{{result.name}},{{result.score}}</p>
  </div>
  <h1>Total</h1>
  <div v-for="total in totals" :key="total.name">
        <p>{{total.name}},{{total.scoreTotal}}</p>
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
          totals:[],
      }
  },
  mounted() {
    axios.get('http://localhost:8082/leaderboard/all')
        .then((response)=>{
            this.results = response.data
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })

    axios.get('http://localhost:8082/leaderboard/total')
        .then((response)=>{
            this.totals = response.data
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })

     }
  }
</script>