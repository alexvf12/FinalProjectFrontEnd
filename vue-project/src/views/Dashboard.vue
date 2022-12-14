<template>
 <Nav />
 <Login  />
 <SignUp />
 <taskColumn />
 <taskItem />
 <Footer/>
</template>

<script>
import Nav from "../components/Nav.vue";
import taskColumn from "../components/TaskColumn.vue";
import taskItem from "../components/taskItem.vue";
import Footer from "../components/Footer.vue";


export default {
  components: {
    Nav,
    taskColumn,
    taskItem,
    Footer
  },
  

};
</script>
