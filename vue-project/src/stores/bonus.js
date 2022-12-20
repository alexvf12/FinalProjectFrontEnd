/*import { defineStore } from "pinia";

import { supabase } from "../supabase";

export default defineStore("items", {
  state() {
    return {
      items: [],
    };
  },

  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("order", { ascending: true });
      this.tasks = tasks;
    },
    async createItem(id, title, status, order) {
      const { data: tasks } = await supabase

        .from("tasks")

        .insert({ user_id: id, title: title, status: status, order: order})

        .order("order", { ascending: true });

      this.tasks = tasks;

      this.fetchTasks();
    },
},

});*/
