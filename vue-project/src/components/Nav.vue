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
  margin-right: 10px;
}

.logo{
  width: 9rem;
  height: 8vh;  
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

@media (min-width: 720px) { 
  .logo{
  width: 20rem;
  height: 15vh;  

}
div{
  height: 15vh;
}
ul{
  padding-top: 30px;
}
button{
font-size: 20px;
  }
}

</style>
