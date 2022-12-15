<template>
  <!-- <div v-for="task in tasksStore.filteredStatus0">
    {{task.title}}
     <p v-if="task.status === 0"> {{ task.title }}
    </p>
    <p v-if="task.status2 === 1"> {{ task.title2 }}
    </p>
    <p v-if="task.status3 === 2"> {{ task.title3 }}
    </p>
  </div> -->
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import userStore from "../stores/user.js";

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapStores(tasksStore, userStore),
  },
  async mounted() {
    this.tasksStore.fetchTasks()
    await this.tasksStore.createTask({
    })
  },
  props: {
    toDo: Array,
  }
}
</script>

<style scoped>

</style>
