<template>
  <div class="divGeneral d-flex flex-column align-items-center">
    <div class="divIndividual mt-5 w-75 text-center">
      <h4 class="text-center">TO DO</h4>
      <hr />

      <div @drop="onDrop($event, 0)" @dragenter.prevent @dragover.prevent>
      <div class="space"></div>
        <taskItem
          v-for="task in tasksStore.filteredStatus0"
          class="d-flex flex-row"
          :task="task"
          draggable="true"
          @dragstart="startDrag($event, task)"
        />
      </div>
<form action="" @submit.prevent="addNewTasks" >
      <input
        v-model="title"
        type="text"
        placeholder="Type a task..."
        class="input-group-text"
        id="inputGroup-sizing-default"
      /><button type="submit">Add new task</button>
    </form>
    </div>
    <div class="divIndividual mt-5 w-75 text-center">
      <h4 class="text-center">DOING</h4>
      <hr />

      <div @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
        <div class="space"></div>
        <taskItem
          v-for="task in tasksStore.filteredStatus1"
          :task="task"
          draggable="true"
          @dragstart="startDrag($event, task)"
        />
      </div>
      <form action="" @submit.prevent="addNewTasks2" >
      <input
        v-model="title2"
        type="text"
        placeholder="Type a task..."
        class="input-group-text"
        id="inputGroup-sizing-default"
      /><button  type="submit">Add new task</button>
    </form>
    </div>
    <div id="doneDiv" class="divIndividual mt-5 mb-5 w-75 text-center">
      <h4 class="text-center">DONE</h4>
      <hr />

      <div @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
        <div class="space"></div>
        <taskItem
          v-for="task in tasksStore.filteredStatus2"
          :task="task"
          draggable="true"
          @dragstart="startDrag($event, task)"
        />
      </div>
      <form action="" @submit.prevent="addNewTasks3" >
      <input
        v-model="title3"
        type="text"
        placeholder="Type a task..."
        class="input-group-text"
        id="inputGroup-sizing-default"
      /><button type="submit">Add new task</button>
    </form>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import userStore from "../stores/user.js";
import taskItem from "./taskItem.vue";
//import bonusStore from "../stores/bonus";

export default {
  data() {
    return {
      title: "",
      title2: "",
      title3: "",
      status: 0,
      status2: 1,
      status3: 2,
    };
  },
  components: {
    taskItem,
  },
  computed: {
    ...mapStores(tasksStore),
    ...mapStores(userStore),
    //...mapStores(bonusStore),
  },

  methods: {
    async addNewTasks() {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title,
        this.status,
        this.order,
      );
      this.title = "";
    },
    async addNewTasks2() {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title2,
        this.status2,
        this.order,
      );
      this.title2 = "";
    },
    async addNewTasks3() {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title3,
        this.status3,
        this.order,
      );
      this.title3 = "";
    },
    startDrag(event, task) {
      console.log(task);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("taskID", task.id);
    },
    onDrop(event, status) {
      const taskID = event.dataTransfer.getData("taskID");
      this.tasksStore.modifiedStatus(status, taskID);
    },
  },
  mounted() {
    this.tasksStore.fetchTasks();
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
.space{
  height: 2vh;
}

h4 {
  margin-top: 10px;
}

hr {
  margin: 5px 0;
  background: black;
  height: 3px;
  margin-bottom: 25px;
}

input {
  margin-top: 10px;
  width: 100%;
  border: none;
}

.divGeneral {
  background: #f1f7fe;
 
}

@media  (min-width: 1024px){

.divGeneral  {
display: flex !important; 
flex-direction: row !important;
justify-content: space-around;
align-items: flex-start !important;
height: 100vh;
}

#doneDiv{
  margin-bottom: 0rem !important;
}

.divIndividual{
  width: 30% !important;
  height: 100vh;
}
}
</style>
