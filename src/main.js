import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBEzq8qG7OZ4L_m7bTr265mj4uaFPik_fA",
    authDomain: "puzzle-application-1cf2c.firebaseapp.com",
    projectId: "puzzle-application-1cf2c",
    storageBucket: "puzzle-application-1cf2c.appspot.com",
    messagingSenderId: "386420396631",
    appId: "1:386420396631:web:bf63e0cad2b35d17c7c912",
    measurementId: "G-RMX6M2DMT2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)


createApp(App).use(router).mount('#app')
