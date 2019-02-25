<template>
  <UserTable :users="tempsABC"></UserTable>
</template>

<script>
import UserTable from "../user/UserTable";
import * as sorter from "../../utils/sortUtils";
export default {
  computed: {
    temps() {
      return this.$store.state.users.temps;
    },
    tempsABC() {
      return sorter.sortUserNamesABC(this.temps);
    }
  },
  mounted() {
    this.$store.dispatch("users/getTemps");
  },
  components: {
    UserTable
  }
};
</script>

<style>
</style>
