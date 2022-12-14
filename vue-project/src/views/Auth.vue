<template>
<<<<<<< HEAD
  <Nav @login="showLogin()" />
=======
  
>>>>>>> origin/main
 <Login  />
 <SignUp />
 
 
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";


export default {
  components: {
    Login,
    SignUp,
  },
  computed: {
    ...mapStores(userStore),
  },
  methods:{
    showLogin(){
      
    }
  }

};

</script>