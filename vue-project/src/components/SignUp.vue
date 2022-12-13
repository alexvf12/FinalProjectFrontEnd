<template>
   <div>
      <h1>Sign up for FREE</h1>
      <form @submit.prevent="signup()" name="myForm" action="" onsubmit="" method="post">
         <div>
            <label for="">FULL NAME</label>
            <input v-model="fullname" type="text" placeholder=" " name="fname">
         </div>
         <div>
            <label for="">EMAIL</label>
            <input v-model="email" type="email" placeholder=" " name="femail">
         </div>
         <div>
            <label form="">PASSWORD</label>
            <input v-model="password" type="password" placeholder="" name="fpassword">
         </div>
         <input type="checkbox">I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>
         <button>CREATE ACCOUNT</button>
      </form>
      <hr>
      <p>Already have an account?</p>
      <a href="">Login</a>
   </div>

</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";

export default {
   data() {
      return {
         fullname: "",
         email: "",
         password: "",
      }
   },
   computed: {
      ...mapStores(userStore),
   },
   methods: {
      async signup() {
         const response = await this.userStore.signUp(this.email, this.password);
      },
   },
};
</script>