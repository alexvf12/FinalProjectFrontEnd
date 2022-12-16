<template>
  <nav>
    <div class="d-flex justify-content-between">
      <img src="../../public/logo.png" alt="logo-tool" width="170" />

      <div class="ul">
        <ul class="d-flex flex-row align-items-center list-unstyled ">
          <li><button v-if="!userStore.user" @click="$emit('add2')" type="button" class="btn btn-outline-warning btn-sm">Log In</button></li>
          <li><button v-if="!userStore.user" @click="$emit('add')" type="button" class="btn btn-outline-warning btn-sm">Sign Up</button></li>
          <li><button v-if="userStore.user" @click="isLoggedOut()" type="button" class="btn btn-outline-warning btn-sm">Log Out</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";

export default {
  data() {
    return {
    }

  },
  computed: {
      ...mapStores(userStore),
    
  },
   methods:{

    isLoggedOut() {
        this.userStore.logOut();
        this.$router.push("/")
   },
    
   }

}

</script>
<style scoped>
.ul {
  font-size: 12px;
  margin-right: 5px;
}
</style>
