<template>
  
  <div   v-if="editing">
    <form class="w-100 contenedor-global" action="" @submit="edit(task.id)" >
    <input class="w-90" v-model="task.title" type="text">
    <button class="btn"><ion-icon name="checkmark-circle-outline"></ion-icon></button>
   </form>
  </div>
  <div @mouseover="hover = true"
      @mouseleave="hover = false" v-else class="d-flex  contenedor-global">
    <div class="w-65 d-flex justify-content-start ">
      <h5 >
        
        {{ task.title }}

      </h5>
    </div>
    <div  v-if="hover" class="w-50 d-flex justify-content-end">
      <button  class="btn" @click="editing = !editing"> <ion-icon name="create-outline"></ion-icon></button>
      <button  class="btn" @click="deleteElement(task.id)"><ion-icon name="trash-outline"></ion-icon></button>
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
      editing: false,
      hover: false,
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

h5{
  font-size: 14px;
  margin: 10px;

}
.contenedor-global{
  border: 1px solid;
  border-radius: 10px;
  border-color: rgba(1, 1, 1, 0.33);
  border-width: 2px;
  margin-bottom: 10px;
  background-color: white;
  
}
button{
  border: 0;
  background-color: none;

}

.hide {
  display: none;
}
    
.myDIV:hover + .hide {
  display: block;
  color: red;
}

.w-90{
  width: 88%;
}

input{
  outline: none;
  border: 0;
    font-size: 13px;
    margin: 8px;
}

</style>
