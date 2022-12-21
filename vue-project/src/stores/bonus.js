import { defineStore } from "pinia";

import { supabase } from "../supabase";

export default defineStore("bonus", {
  state() {
    return {
      columns: [],
    };
  },

  actions: {
    async fetchColumns() {
      
      const { data: columns } = await supabase
        .from("columns")
        .select("*")
        .order("id", { ascending: true });
      this.columns = columns;
    },
    async createColumn(user_id, mainTitle) {
      const { data: columns } = await supabase

        .from("columns")

        .insert({ user_id:user_id, mainTitle: mainTitle})

        .order("id", { ascending: true });

      

      this.fetchColumns();
    },
},

});
