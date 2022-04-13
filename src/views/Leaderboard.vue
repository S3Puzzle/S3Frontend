<template>
  <div>
    <h1>leaderboard</h1>
    <GetLeaderboard/>
  </div>
</template>

<script>
import GetLeaderboard from '../components/GetLeaderboard.vue'
export default {
  name: 'Leaderboard',
  components:{
    GetLeaderboard
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
