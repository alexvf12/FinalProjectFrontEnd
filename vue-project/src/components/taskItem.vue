<template>
  <div v-if="editing">
    <input v-model="task.title" type="text">
    <button @click="edit(task.id)">enviar</button>
  </div>
  <div v-else class="d-flex">
    <div class="w-65 d-flex justify-content-end">
      <h5 >
        
        {{ task.title }}

      </h5>
    </div>
    <div class="w-50 d-flex justify-content-end">
      <button @click="editing = !editing"><ion-icon name="pencil-outline"></ion-icon></button>
      <button @click="deleteElement(task.id)"><ion-icon name="trash-outline"></ion-icon></button>
    </div>


  </div>

</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import userStore from "../stores/user.js";

export default {
  data() {
    return {
      editing: false
    }
  },
  computed: {
    ...mapStores(tasksStore, userStore),
  },
  methods: {
    edit(id) {
      this.tasksStore.modifiedTask(this.task.title, id)
      this.editing = false
    },
    deleteElement(id) {
      this.tasksStore.deleteItem(id)
    }
  },
  props: {
    task: Object,
  },
}
</script>

<style scoped>
.w-65 {
  width: 65%;
}
</style>
