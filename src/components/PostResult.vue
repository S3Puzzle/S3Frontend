<template>

  <div v-if="naam == '' ">
    <input type='text' v-model="name">
    <button @click="postname">set name</button>
  </div>
  <div v-if="naam != '' ">
    <p>Hi {{naam}}</p>
    <input type='text' v-model="points">
    <button @click="postresults">post results</button>
  </div>

  
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostResult',
  data(){
      return{
        name: this.naam,
        points: 0,
      }
  },
  props: {
    naam: String,
    email: String
  },
  methods: {  
    postresults() {
        axios.post('http://localhost:8082/leaderboard/add', {name: this.naam, score: this.points },)
    },
    postname() {
      axios.post('http://localhost:8083/name/add', {name: this.name, email: this.email },)
      location.reload()
    }
  }
}
</script>
