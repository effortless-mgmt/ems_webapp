<template>
  <div>
    <b-container>
      <AddUserButton class="addButton"/>
      <UserTable :users="tempsABC"></UserTable>
    </b-container>
  </div>
</template>

<script>
import UserTable from "../user/UserTable";
import AddUserButton from "../user/AddUserButton";
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
    UserTable,
    AddUserButton
  }
};
</script>

<style>
.addButton {
  margin: 20px auto;
}
</style>
