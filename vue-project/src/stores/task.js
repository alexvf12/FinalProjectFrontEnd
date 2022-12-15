import { defineStore } from "pinia";

import { supabase } from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasks: [],
    };
  },

  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },

    async createTask(id, title, status) {
      const { data: tasks } = await supabase

        .from("tasks")

        .insert({ user_id: id, title: title, status: status })

        .order("id", { ascending: false });

      this.tasks = tasks;

      this.fetchTasks();
    },
    async modifiedTask(title, id){
      const {error} = await supabase
      .from("tasks")
      .update({title:title})
      .eq("id",id);

      this.fetchTasks();
    },
    async deleteItem(id){
      const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)

      this.fetchTasks();

    }
  },
  getters:{
    filteredStatus0 () {
        return this.tasks.filter((task) => task.status === 0)
  },
  filteredStatus1 () {
    return this.tasks.filter((task) => task.status === 1)
},
filteredStatus2 () {
  return this.tasks.filter((task) => task.status === 2)
}
  }
});
