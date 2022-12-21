<template>
    <form class="text-center" action="" @submit.prevent="addNewTitle">
      <input
        v-model="mainTitle"
        type="text"
        placeholder="Type a title..."
        
        class="input-group-text"
        id="inputGroup-sizing-default"
      />
    </form>
  <div
    v-for="column in bonusStore.columns"
    class="divIndividual mt-5 w-75 text-center"
  >
    <h4>{{ column.mainTitle }}</h4>
  

    <hr />

    <div @drop="onDrop($event, 0)" @dragenter.prevent @dragover.prevent>
      <div class="space"></div>
      <taskItem
        v-for="(task, index) in tasksStore.filteredStatus0"
        class="d-flex flex-row"
        :task="task"
        @taskUp="moveTaskUp(index, task)"
        @taskDown="moveTaskDown(index, task)"
        draggable="true"
        @dragstart="startDrag($event, task)"
      />
    </div>
    <form action="" @submit.prevent="addNewTasks()">
      <input
        v-model="title"
        type="text"
        placeholder="Type a task..."
        class="input-group-text"
        id="inputGroup-sizing-default"
      /><button type="submit">Add new task</button>
    </form>
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
        
      );
      this.mainTitle = "";
    },
  },
  props: {
    column: Object,
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
    flex-wrap: wrap !important;
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
