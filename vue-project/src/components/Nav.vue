<template>
  <nav class="shadow p-3 mb-4 rounded">
    <div class="d-flex justify-content-between div">
      <img src="../../public/logo.png" alt="logo-tool" class=" logo"  />

      <div class="ul">
        <ul class="flex list-unstyled">
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
  margin-right: 10px;
}

.logo{
  width: 9rem;
  height: vh;  
}

div{
  height: 10vh;
}

ul{
  padding-top: 18px;
}

.flex{
  display: flex;
  align-items: center;
}
</style>
