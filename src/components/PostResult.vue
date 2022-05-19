<template>
  <div>
    <button @click="postresults">post results</button>
  </div>
  <p>Hi {{naam}}</p>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostResult',
  props: {
    naam: String,
    email: String
  },
  methods: {  
    postresults() {
        axios.post('http://localhost:8082/leaderboard/add', {name: this.naam, score: '6' },)
    }
  }
}
</script>
