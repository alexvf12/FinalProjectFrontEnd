<template>
    <div v-if="show2">
        <div v-if="!userStore.user" class="logModal">
            <form @submit.prevent="login()"  class="screen-1 signup" name="myForm" action=""
                onsubmit="" method="post">
                <div class="d-flex justify-content-end">
                    <button class="btn shadow-none w-5" @click="$emit('close2')">
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>
                <div class="d-flex justify-content-center">
                    <img class="w-75 mb-4" src="../../public/logo.png" alt="logo-tool" />
                </div>
                <h4 class="">LOG IN</h4>
                <div class="email">
                    <label for="email">Email Address</label>
                    <div>
                        <ion-icon name="mail-outline"></ion-icon>
                        <input v-model="email" type="email" name="email" placeholder=" Username@gmail.com" />
                    </div>
                </div>
                <div class="password">
                    <div class="d-flex justify-content-between">
                        <label for="password">Password</label>
                    </div>
                    <div>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input v-model="password" class="pas" type="password" name="password"
                            placeholder=" ············" />
                        <ion-icon class="show-hide" name="eye-outline"></ion-icon>
                    </div>
                </div>
                <div class="d-flex">
                    <input class="mb-3 mx-2" type="checkbox" />
                    <span class="mb-3">Remember me.</span>
                </div>
                <button class="login w-50 align-self-center">Log In</button>

                <div class="footer"><span>Signup</span><span>Forgot Password?</span></div>
            </form>
        </div>
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
    props: {
        show2: Boolean
    },
    computed: {
        ...mapStores(userStore),
    },
    methods: {
        async login() {
            const response = await this.userStore.signIn(this.email, this.password);
        },
    },
};
</script>

<style scoped>
* {
    font-family: "Poppins";
}

.logModal {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .7);
}

.signup {
    display: flex;
    background: #dde5f4;
    height: 100vh;
}

.screen-1 {
    background: #f1f7fe;
    padding: 2em;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0 0 2em #e6e9f9;
    width: 85%;
    height: 85vh;

    /* gap: 2em; */
}


.screen-1 .email {
    background: white;
    box-shadow: 0 0 2em #e6e9f9;
    padding: 0.5em 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    border-radius: 20px;
    color: #4d4d4d;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
}

.screen-1 .email input {
    outline: none;
    border: none;
    width: 85%;

}

.screen-1 .email ion-icon {
    color: #4d4d4d;
    margin-bottom: -0.2em;
}

.screen-1 .password {
    background: white;
    box-shadow: 0 0 2em #e6e9f9;
    padding: 0.5em 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    border-radius: 20px;
    color: #4d4d4d;
    margin-bottom: 1rem;
    margin-top: 0.3rem;
}

.screen-1 .password input {
    outline: none;
    border: none;
    width: 80%;
}

.screen-1 .password ion-icon {
    color: #4d4d4d;
    margin-bottom: -0.1em;
}

.screen-1 .email ion-icon {
    color: #4d4d4d;
    margin-bottom: -0.2em;
}

.screen-1 .login {
    padding: 1em;
    background: #3e4684;
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: 600;
}

.screen-1 .footer {
    display: flex;
    font-size: 0.7em;
    color: #5e5e5e;
    justify-content: space-between;
}

.screen-1 .footer span {
    cursor: pointer;
}

button {
    cursor: pointer;
    margin-bottom: 1rem;
    width: 50%;
    font-size: 0.7rem;
}

.email {
    display: flex;
    justify-content: flex-start;
}

h4 {
    font-size: 1.2rem;
    margin-left: 0.5rem;
}

input {
    font-size: 0.9rem;
}

label {
    font-size: 0.9rem;
}

.size-xs {
    font-size: x-small;
}

.size-l {
    font-size: x-large;
}

.size-xxs {
    font-size: 0.58rem;
}

.w-5 {
    width: 5%;
    height: 1vh;
}
</style>