<template>
 <Nav />
 
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";
import Nav from "../components/Nav.vue";


export default {
  components: {
    Nav,
  },
  computed: {
    ...mapStores(userStore),
  },
};
</script>
