<template>
  <div class="divGeneral d-flex flex-column align-items-center">
    <div class="divIndividual1 mt-5 w-75 text-center">
      <h4 class="text-center">To-do list</h4>
      <hr />

      <div @drop="onDrop($event, 0)" @dragenter.prevent @dragover.prevent>
        <taskItem v-for="task in tasksStore.filteredStatus0" class="d-flex flex-row" :task="task" draggable="true"
          @dragstart="startDrag($event, item)" />
      </div>

      <input v-model="title" type="text" placeholder="Type a task..." class="input-group-text"
        id="inputGroup-sizing-default" /><button @click="addNewTasks" type="button">Add new task</button>
    </div>
    <div class="divIndividual2 bg-light mt-5 w-75 text-center">
      <h4 class="text-center">Doing</h4>
      <hr />

      <div @drop="onDrop($event, 0)" @dragenter.prevent @dragover.prevent></div>
      <taskItem v-for="task in tasksStore.filteredStatus1" :task="task" draggable="true"
        @dragstart="startDrag($event, item)" />
    </div>

    <input v-model="title2" type="text" placeholder="Type a task..." class="input-group-text"
      id="inputGroup-sizing-default" /><button @click="addNewTasks2" type="button">Add new task</button>
  </div>
  <div class="divIndividual3 bg-light mt-5 mb-5 w-75 text-center">
    <h4 class="text-center">Done</h4>
    <hr />

    <div @drop="onDrop($event, 0)" @dragenter.prevent @dragover.prevent></div>
    <taskItem v-for="task in tasksStore.filteredStatus2" :task="task" draggable="true"
      @dragstart="startDrag($event, item)" />
  </div>

  <input v-model="title3" type="text" placeholder="Type a task..." class="input-group-text"
    id="inputGroup-sizing-default" /><button @click="addNewTasks3" type="button">Add new task</button>
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import userStore from "../stores/user.js";
import taskItem from "./taskItem.vue";


export default {
  data() {
    return {
      title: "",
      title2: "",
      title3: "",
      status: 0,
      status2: 1,
      status3: 2,
      startDrag,
      onDrop,
    };
  },
  components: {
    taskItem,
  },
  computed: {
    ...mapStores(tasksStore),
    ...mapStores(userStore),
  },

  methods: {
    async addNewTasks() {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title,
        this.status
      );
      this.title = ""
    },
    async addNewTasks2() {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title2,
        this.status2
      );
      this.title2 = ""
    },
    async addNewTasks3() {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title3,
        this.status3
      );
      this.title3 = ""
    },
  },
  mounted() {
    this.tasksStore.fetchTasks()
    this.tasksStore.createTask(this.task)
    this.tasksStore.modifiedTask()
  },
  setup() {
    const startDrag = (event, task) => {
      console.log(task)
      event.dataTransfer.dropEffect = "move"
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData("itemID", this.userStore.user.id)
    }
    const onDrop = (event, status) => {
        const itemID = event.dataTransfer.getData("itemID")
        const item = this.tasks.value.find((item) => item.id == itemID)
        item.status = status
      }
    return {
      startDrag,
      onDrop,
    }
  },
};
</script>



<style scoped>
button {
  padding: 5px 10px;
  margin: 10px;
  border-radius: 50px;
  border: none;
  background-color: #282a2aac;
  color: white;
}

h4 {
  margin-top: 10px;
}

hr {
  margin: 5px 0;
}

input {
  margin-top: 10px;
  width: 100%;
  border: none;
}

.divGeneral {
  background: #f1f7fe;
}

.divIndividual1 {
  background-color: white;
  box-shadow: 0 0 2em #c0b3264a;
}

.divIndividual2 {
  background-color: white;
  box-shadow: 0 0 2em #15658a6f;
}

.divIndividual3 {
  background-color: white;
  box-shadow: 0 0 2em #d55ac556;
}
</style>
