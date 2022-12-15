<template>

</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";
import nav from "../components/Nav.vue";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";


export default {
  data() {
    return {

    }
  },
  components: {
    nav,
    SignUp,
    Login,
  },
  computed: {
    ...mapStores(userStore),
  },

};

</script>