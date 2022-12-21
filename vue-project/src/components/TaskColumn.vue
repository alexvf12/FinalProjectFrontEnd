<template>
   <newColumn />
  <div class="bg-gris">
    <button>
      <ion-icon name="add-outline"></ion-icon>New column
    </button>
  </div>
  <!-- <div class="divGeneral d-flex flex-column align-items-center">
    <div class="divIndividual mt-5 w-75 text-center">
      <h4 class="text-center">TO DO</h4>
      <hr />

      <div @drop="onDrop($event, 0)" @dragenter.prevent @dragover.prevent>
        <div class="space"></div>
        <taskItem v-for="(task, index) in tasksStore.filteredStatus0" class="d-flex flex-row" :task="task"
          @taskUp="moveTaskUp(index, task)" @taskDown="moveTaskDown(index, task)" draggable="true"
          @dragstart="startDrag($event, task)" />
      </div>
      <form action="" @submit.prevent="addNewTasks()">
        <input v-model="title" type="text" placeholder="Type a task..." class="input-group-text"
          id="inputGroup-sizing-default" /><button type="submit">Add new task</button>
      </form>
    </div>
    <div class="divIndividual mt-5 w-75 text-center">
      <h4 class="text-center">DOING</h4>
      <hr />

      <div @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
        <div class="space"></div>
        <taskItem v-for="(task, index) in tasksStore.filteredStatus1" :task="task" @taskUp="moveTaskUp2(index, task)"
          @taskDown="moveTaskDown2(index,task)" draggable="true" @dragstart="startDrag($event, task)" />
      </div>
      <form action="" @submit.prevent="addNewTasks2()">
        <input v-model="title2" type="text" placeholder="Type a task..." class="input-group-text"
          id="inputGroup-sizing-default" /><button type="submit">Add new task</button>
      </form>
    </div>
    <div id="doneDiv" class="divIndividual mt-5 mb-5 w-75 text-center">
      <h4 class="text-center">DONE</h4>
      <hr />

      <div @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
        <div class="space"></div>
        <taskItem v-for="(task, index) in tasksStore.filteredStatus2" :task="task" @taskUp="moveTaskUp3(index, task)" @taskDown="moveTaskDown3(index, task)"
          draggable="true" @dragstart="startDrag($event, task)" />
      </div>
      <form action="" @submit.prevent="addNewTasks3()">
        <input v-model="title3" type="text" placeholder="Type a task..." class="input-group-text"
          id="inputGroup-sizing-default" /><button type="submit">Add new task</button>
      </form>
    </div> 
   
    
  </div>-->
  
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import userStore from "../stores/user.js";
import taskItem from "./taskItem.vue";
import newColumn from "../components/newColumn.vue";
import bonusStore from "../stores/bonus";


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
    newColumn,
  },
  computed: {
    ...mapStores(tasksStore),
    ...mapStores(userStore),
    ...mapStores(bonusStore),
    
  },

  methods: {
    async addNewTasks() {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title,
        this.status,
        this.tasksStore.maxOrder0 + 1
      );
      this.title = "";
    },
    async addNewTasks2() {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title2,
        this.status2,
        this.tasksStore.maxOrder1 + 1
      );
      this.title2 = "";
    },
    async addNewTasks3() {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title3,
        this.status3,
        this.tasksStore.maxOrder2 + 1
      );
      this.title3 = "";
    },
    startDrag(event, task) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("taskID", task.id);
    },
    onDrop(event, status) {
      const taskID = event.dataTransfer.getData("taskID");
      this.tasksStore.modifiedStatus(status, taskID);
    },
    moveTaskUp(index, task) {
      const orderActual = { ...task }.order + 0
      const taskAnterior = this.tasksStore.filteredStatus0[index - 1]
      this.tasksStore.modifiedOrder(taskAnterior.order, task.id)
      this.tasksStore.modifiedOrder(orderActual, taskAnterior.id)

    },
    moveTaskDown(index, task) {
      const orderActual = { ...task }.order + 0
      const taskPosterior = this.tasksStore.filteredStatus0[index + 1]
      this.tasksStore.modifiedOrder(taskPosterior.order, task.id)
      this.tasksStore.modifiedOrder(orderActual, taskPosterior.id)
    },
    moveTaskUp2(index, task) {
      const orderActual = { ...task }.order + 0
      const taskAnterior = this.tasksStore.filteredStatus1[index - 1]
      this.tasksStore.modifiedOrder(taskAnterior.order, task.id)
      this.tasksStore.modifiedOrder(orderActual, taskAnterior.id)

    },
    moveTaskDown2(index, task) {
      const orderActual = { ...task }.order + 0
      const taskPosterior = this.tasksStore.filteredStatus1[index + 1]
      this.tasksStore.modifiedOrder(taskPosterior.order, task.id)
      this.tasksStore.modifiedOrder(orderActual, taskPosterior.id)
    },
    moveTaskUp3(index, task) {
      const orderActual = { ...task }.order + 0
      const taskAnterior = this.tasksStore.filteredStatus2[index - 1]
      this.tasksStore.modifiedOrder(taskAnterior.order, task.id)
      this.tasksStore.modifiedOrder(orderActual, taskAnterior.id)

    },
    moveTaskDown3(index, task) {
      const orderActual = { ...task }.order + 0
      const taskPosterior = this.tasksStore.filteredStatus2[index + 1]
      this.tasksStore.modifiedOrder(taskPosterior.order, task.id)
      this.tasksStore.modifiedOrder(orderActual, taskPosterior.id)
    }
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

.space {
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

.bg-gris {
  background: #f1f7fe;

}

.divGeneral {
  background: #f1f7fe;
}

@media (min-width: 1024px) {
  .divGeneral {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-around;
    align-items: flex-start !important;
    height: 100vh;
  }

  #doneDiv {
    margin-bottom: 0rem !important;
  }

  .divIndividual {
    width: 30% !important;
    height: 100vh;
    margin: 0 10px;
  }
}
</style>
