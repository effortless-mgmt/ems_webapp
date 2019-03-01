<template>
  <div>
    <b-container>
      <UserTable :users="tempsABC"></UserTable>
      <b-button @click="goToNewUserForm()" variant="primary">New User</b-button>
    </b-container>
  </div>
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
  },
  methods: {
    goToNewUserForm() {
      this.$router.push({ name: "newUser" });
    }
  }
};
</script>

<style>
.addButton {
  margin: 20px auto;
}
</style>
