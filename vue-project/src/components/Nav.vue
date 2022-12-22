<template>
  
  <nav class="shadow p-3  rounded sticky-top bg-white">
    <div  class="d-flex justify-content-between div ">
      <img src="../../public/logo.png" alt="logo-tool" class=" logo"  />

      <div class="ul">
        <ul class="flex list-unstyled">
          <li v-if="!userStore.user"><button  @click="$emit('add2')" type="button" class="btn btn-outline-warning btn-sm">Log In</button></li>
          <li v-if="!userStore.user"><button  @click="$emit('add')" type="button" class="btn btn-outline-warning btn-sm">Sign Up</button></li>
          <li v-if="userStore.user"><button  @click="isLoggedOut()" type="button" class="btn btn-outline-warning btn-sm">Log Out</button></li>
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
nav{
  height: 6rem;
}

.ul {
  margin-right: 10px;
}

.logo{
  width: 8rem;
  
}

ul{
  padding-top: 18px;
}

.flex{
  display: flex;
  align-items: center;
}

@media (min-width: 720px) { 

nav{
  height: 10rem;
}
.logo{
  width: fit-content;
  height: 8rem; 
} 
button{
font-size: 20px;
  }
  ul{
  padding-top: 40px;
}
}

</style>
