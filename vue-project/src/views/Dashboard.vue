<template>
 <Login  />
 <SignUp />
 <taskColumn />
 <taskItem />
 
</template>

<script>
import taskColumn from "../components/TaskColumn.vue";
import taskItem from "../components/taskItem.vue";


export default {
  components: {
    taskColumn,
    taskItem,
  },
  

};
</script>
