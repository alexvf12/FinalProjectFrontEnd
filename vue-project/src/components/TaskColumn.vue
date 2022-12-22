<template>
  <div
    class="divIndividual mt-5 w-75 text-center"
    @drop="onDropColumn($event, column)"
    @dragenter.prevent
    @dragover.prevent
    draggable="true"
    @dragstart="startDragColumn($event, column)"
  >
    <h4>{{ column.mainTitle }}</h4>
    <hr />
    <div @drop="onDrop($event, column.id)" @dragenter.prevent @dragover.prevent>
      <div class="space"></div>
      <taskItem
        v-for="(task, index) in tasksStore.getTasksByStatus(column.id)"
        class="d-flex flex-row"
        :task="task"
        @taskUp="moveTaskUp(index, task)"
        @taskDown="moveTaskDown(index, task)"
        draggable="true"
        @dragstart="startDrag($event, task)"
      />
    </div>
    <form action="" @submit.prevent="addNewTasks(column.id)">
      <input
        v-model="title"
        type="text"
        placeholder="Type a task..."
        class="input-group-text"
        id="inputGroup-sizing-default"
      /><button type="submit">Add new task</button>
    </form>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/task.js";
import userStore from "../stores/user.js";
import taskItem from "./taskItem.vue";
import bonusStore from "../stores/bonus";

export default {
  data() {
    return {};
  },
  components: {
    taskItem,
  },
  computed: {
    ...mapStores(tasksStore),
    ...mapStores(userStore),
    ...mapStores(bonusStore),
  },
  props: {
    column: Object,
  },
  methods: {
    async addNewTasks(columnId) {
      const response = await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title,
        columnId,
        this.tasksStore.getMaxOrderByStatus(columnId) + 1
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
      event.dataTransfer.setData("order", column.order);
    },
    async onDropColumn(event, column) {
      const columnId = Number(event.dataTransfer.getData("columnId"));
      const columnOrder = Number(event.dataTransfer.getData("order"));

      if (column.order>columnOrder) {
        this.bonusStore.columns
          .filter((eachcolumn) => eachcolumn.order <= column.order)
          .filter((eachcolumn) => eachcolumn.id !== columnId)
          .forEach(async (eachcolumn) => {
            await this.bonusStore.modifiedOrderColumn(
              eachcolumn.order - 1,
              eachcolumn.id
            );
          });
      } else if (column.order < columnOrder) {
        this.bonusStore.columns
          .filter((eachcolumn) => eachcolumn.order >= column.order)
          .filter((eachcolumn) => eachcolumn.id !== columnId)
          .forEach(async (eachcolumn) => {
            await this.bonusStore.modifiedOrderColumn(
              eachcolumn.order + 1,
              eachcolumn.id
            );
          });
      }
      await this.bonusStore.modifiedOrderColumn(column.order, columnId);
    },

    moveTaskUp(index, task) {
      const orderActual = { ...task }.order + 0;
      const taskAnterior = this.tasksStore.getTasksByStatus(task.status)[
        index - 1
      ];
      this.tasksStore.modifiedOrder(taskAnterior.order, task.id);
      this.tasksStore.modifiedOrder(orderActual, taskAnterior.id);
    },
    moveTaskDown(index, task) {
      const orderActual = { ...task }.order + 0;
      const taskPosterior = this.tasksStore.getTasksByStatus(task.status)[
        index + 1
      ];
      this.tasksStore.modifiedOrder(taskPosterior.order, task.id);
      this.tasksStore.modifiedOrder(orderActual, taskPosterior.id);
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
