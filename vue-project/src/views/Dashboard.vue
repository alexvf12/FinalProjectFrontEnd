<template>
 <Nav />
 <Login />
 <SignUp />
 
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";
import Nav from "../components/Nav.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";


export default {
  components: {
    Nav,
    Login,
    SignUp,
  },
  computed: {
    ...mapStores(userStore),
  },
};
</script>
