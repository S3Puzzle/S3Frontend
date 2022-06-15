<template>
  <div class="home">
    <div v-if="userstate==false">
      <button @click="googleLogin">sign in</button>
    </div>
    <div v-if="userstate==true">
      <button @click="googleOut">sign out</button>
      <PostResult :naam=giveName(user.email) :email=user.email />
    </div>

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
           userstate:false,
     };
 },
    created() {
       firebase.auth().onAuthStateChanged(user => {
           if (user) {
               this.user = user;
           }
        if (user) {  
          this.userstate = true; 
          }
        else { 
          this.userstate = false; 
          } 
       });
   },
  methods:{
    googleLogin(){
      const provider = new firebase.auth.GoogleAuthProvider;
      firebase.auth().signInWithPopup(provider).then(() => {
        alert("signed in");
        this.userstate = true; 
      }).catch(err => {
        console.log(err);
      });
    },
    googleOut(){
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully signed out.");
          this.userstate = false; 
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
