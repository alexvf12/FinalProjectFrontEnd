<template>
  <div class="bg-gris">
    <button @click="isHidden = !isHidden">
      <ion-icon name="add-outline"></ion-icon>New column
    </button>
    <form v-if="!isHidden" class="text-center card d-flex flex-row justify-content-between align-items-center" action=""
      @submit.prevent="addNewTitle(); isHidden = !isHidden">
      <input v-model="mainTitle" type="text" placeholder="Type a title..." id="inputGroup-sizing-default" />
      <button class="btn button"><ion-icon name="checkmark-done-outline"></ion-icon></button>
    </form>
  </div>
  <div class="d-flex flex-column justify-content-start align-items-center bg-gris divGeneral" >
    <div v-for="column in bonusStore.columns" class=" divIndividual mt-5 w-75 text-center" @drop="onDropColumn($event, column.id)" @dragenter.prevent @dragover.prevent draggable="true"
          @dragstart="startDragColumn($event, column)">
      <h4>{{ column.mainTitle }}</h4>
      <hr />
      <div @drop="onDrop($event, column.id)" @dragenter.prevent @dragover.prevent>
        <div class="space"></div>
        <taskItem v-for="(task, index) in tasksStore.getTasksByStatus(column.id)" class="d-flex flex-row" :task="task"
          @taskUp="moveTaskUp(index, task)" @taskDown="moveTaskDown(index, task)" draggable="true"
          @dragstart="startDrag($event, task)" />
      </div>
      <form action="" @submit.prevent="addNewTasks(column.id)">
        <input v-model="title" type="text" placeholder="Type a task..." class="input-group-text"
          id="inputGroup-sizing-default" /><button type="submit">Add new task</button>
      </form>
    </div>
  </div>

  <!-- EMPIEZA EL ITEM -->
</template>

<script>
import { mapStores } from "pinia";
import bonusStore from "../stores/bonus";
import tasksStore from "../stores/task.js";
import taskItem from "../components/taskItem.vue";
import userStore from "../stores/user";

export default {
  data() {
    return {
      mainTitle: "",
      id: 0,
      isHidden: true,
      title: "",
      status: 0,
      order:0,
    };
  },
  computed: {
    ...mapStores(bonusStore, tasksStore, userStore),
  },
  components: {
    taskItem,
  },
  methods: {
    async addNewTitle() {
      const response = await this.bonusStore.createColumn(
        this.userStore.user.id,
        this.mainTitle,
        this.bonusStore.getMaxOrderByColumn
      );
      this.mainTitle = "";
    },
    async addNewTasks(columnId) {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title,
        columnId,
        (this.tasksStore.getMaxOrderByStatus(columnId) + 1)
      );
      this.title = "";
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
    startDragColumn(event, column) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("columnId", column.id);
    },
    onDropColumn(event, order) {
      const taskID = event.dataTransfer.getData("columnId");
      this.bonusStore.modifiedOrderColumn(order, columnId);
    },
    moveTaskUp(index, task) {
      const orderActual = { ...task }.order + 0
      const taskAnterior = this.tasksStore.getTasksByStatus(task.status)[index - 1]
      this.tasksStore.modifiedOrder(taskAnterior.order, task.id)
      this.tasksStore.modifiedOrder(orderActual, taskAnterior.id)

    },
    moveTaskDown(index, task) {
      const orderActual = { ...task }.order + 0
      const taskPosterior = this.tasksStore.getTasksByStatus(task.status)[index + 1]
      this.tasksStore.modifiedOrder(taskPosterior.order, task.id)
      this.tasksStore.modifiedOrder(orderActual, taskPosterior.id)
    }
  },
  props: {
    column: Object,
  },
  mounted() {
    this.bonusStore.fetchColumns();
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
  width: 100%;
  border: none;
}

.bg-gris {
  background: #f1f7fe;
}

.divGeneral {
  background: #f1f7fe;
}

.card {
  width: 10rem;
  margin-left: 1rem;
  height: 7vh;
}

.card input {
  width: 7rem;
}

.button {
  width: fit-content;
  background: none;
}

@media (min-width: 1024px) {
  .divGeneral {
    align-items: flex-start !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
  }

  #doneDiv {
    margin-bottom: 0rem !important;
  }

  .divIndividual {
    width: 23% !important;
    height: fit-content;
    margin: 0 10px;
  }
}
</style>
