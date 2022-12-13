<template>
 <Nav />
 <Login />
 
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";
import Nav from "../components/Nav.vue";
import Login from "../components/Login.vue";


export default {
  components: {
    Nav,
    Login,
  },
  computed: {
    ...mapStores(userStore),
  },
};
</script>
