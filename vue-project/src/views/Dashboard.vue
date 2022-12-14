<template>
 <Nav />
 <Login  />
 <SignUp />
 <taskColumn />
 <taskItem />
 
</template>

<script>
import Nav from "../components/Nav.vue";
import taskColumn from "../components/TaskColumn.vue";
import taskItem from "../components/taskItem.vue";


export default {
  components: {
    Nav,
    taskColumn,
    taskItem
  },
  

};
</script>
