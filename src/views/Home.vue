<template>
  <div class="home">
  home
  <div>
<input v-model="name" placeholder="edit me">
    <button @click="googleLogin">sign in</button>
  </div>
  <PostResult :naam=giveName(user.email) :email=user.email />
  </div>
</template>

<script>
import PostResult from '../components/PostResult.vue'
import firebase from 'firebase'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    PostResult
    },
    data() {
       return {
           user: null,
           username:null,
     };
 },
    created() {
       firebase.auth().onAuthStateChanged(user => {
           if (user) {
               this.user = user;
           }
       });
   },
  methods:{
    googleLogin(){
      const provider = new firebase.auth.GoogleAuthProvider;
      firebase.auth().signInWithPopup(provider).then(() => {
        alert("signed in");
      }).catch(err => {
        console.log(err);
      });
    },
    giveName(usermail){
      axios.get('http://localhost:8083/name/get', { params: { email: usermail } })
        .then((response)=>{
            this.username = response.data
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
      return this.username
     }
    }
  }
</script>
