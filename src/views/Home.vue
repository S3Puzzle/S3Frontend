<template>
  <div class="home">
  home
  <div>
<input v-model="name" placeholder="edit me">
    <button @click="googleLogin">sign in</button>
  </div>
  <PostResult/>
  </div>
</template>

<script>
import PostResult from '../components/PostResult.vue'
import firebase from 'firebase'
export default {
  name: 'Home',
  components: {
    PostResult
    },
  data(){
      return{
        name: "naamtest"
      }
  },
  methods:{
    googleLogin(){
      const provider = new firebase.auth.GoogleAuthProvider;
      firebase.auth().signInWithPopup(provider).then(() => {
        alert("signed in");
      }).catch(err => {
        console.log(err);
      });
    }
  }
    }
</script>
