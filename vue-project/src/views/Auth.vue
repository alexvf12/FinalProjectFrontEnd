<template>
  <Nav @login="showLogin()" />
 <Login  />
 <SignUp />
 <Footer />
 
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";
import Nav from "../components/Nav.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Nav,
    Login,
    SignUp,
    Footer
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