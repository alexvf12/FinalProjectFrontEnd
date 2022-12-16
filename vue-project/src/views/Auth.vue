<template>
  <section class="background">
    <div class="d-flex align-items-center flex-column">
      <h2 class="lean">LEAN PROJECT MANAGEMENT.</h2>
      <h2 class="simpli">SIMPLIFIED.</h2>
      <h4 class="boost">Boost your personal productivity.</h4>
    </div>
  </section>
  <section class="h-1 gris text-white">
    <div class="text-center">
      <h3 class="mx-5 h2">Visualize your work with <h3 class="color">Tool task management</h3>
      </h3>
      <p class="size-1 mx-5">The Tool task management board gives you an excellent overview of your current work situation.
        Visualizing work leads to improved productivity.</p>
      <img class="tablero" src="../../public/Tablero-trello.png" alt="tablero">
    </div>
  </section>

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

<style>
.background {
  background-image: url(../../public/Website.png);
  height: 58.2vh;
  background-repeat: no-repeat;
  background-size: contain;
}

.lean {
  font-weight: 700;
  margin-top: 10%;
}

.simpli {
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: rgb(229, 255, 0);
}

.boost {
  font-weight: 300;
  font-size: 1.1rem;
  margin-left: 6rem;
  margin-top: 1.3rem;
}

.gris {
  background-color: rgba(0, 0, 0, 0.735);
}

.h-1 {
  padding-top: 10%;
  height: 60vh;

}

.color {
  color: gold;
}

.size-1{
  font-size: 1rem;
  font-weight: 300;
}

.tablero{
  width: 70%;
}

</style>