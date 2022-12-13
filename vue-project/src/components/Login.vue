<template>
    <div class="">
        <h1>Log In</h1>
        <form @submit.prevent="login" name="myForm" id="form" action="" onsubmit="" method="post">
            <div>
                <label for="">USER</label>
                <input v-model="email" type="text" placeholder="Enter your email" name="fname" id="" />
            </div>
            <div>
                <a href="">Forgot password?</a>
                <label form="">PASSWORD</label>
                <input type="text" v-model="password" placeholder="Enter your password" name="fpassword"
                    id="password" />
            </div>
            <input type="checkbox" />Remember me
            <button>LOG IN</button>
        </form>

        <hr />
        <p>No account?</p>
        <a href="">Sign up for free</a>
    </div>
</template>
<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";

export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    computed: {
        ...mapStores(userStore),
    },
    methods: {
        async login() {
            const response = await this.userStore.signUp(this.email, this.password);
        },
    },
};
</script>
