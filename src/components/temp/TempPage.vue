<template>
  <div>
    <b-container>
      <b-row class="tableTop">
        <b-col md="4">
          <b-input-group>
            <b-input-group-text slot="prepend">
              <font-awesome-icon icon="search"></font-awesome-icon>
            </b-input-group-text>
            <b-input v-model="userSearchInput" placeholder="Search users"></b-input>
            <b-button @click="toggleFilter" variant="outline-info" slot="append">
              <font-awesome-icon icon="filter"></font-awesome-icon>
            </b-button>
          </b-input-group>
        </b-col>
        <b-col>
          <b-button md="2" variant="info">Search</b-button>
        </b-col>
        <b-col md="2">
          <b-button @click="goToNewUserForm()" variant="primary">New User</b-button>
        </b-col>
      </b-row>
      <b-container v-if="showFilters">
        <div>Filtering by first name, last name, email and phone</div>
      </b-container>
      <UserTable :users="tempsABC" :caption="tableCaption"></UserTable>
    </b-container>
  </div>
</template>

<script>
import UserTable from "../user/UserTable";
import * as sorter from "../../utils/sortUtils";
export default {
  data() {
    return {
      userSearchInput: "",
      showFilters: false,
      filterByPhoneNumber: true
    };
  },
  computed: {
    temps() {
      return this.$store.state.users.temps;
    },
    tempsABC() {
      if (this.userSearchInput) {
        return sorter.sortUserNamesABC(this.temps).filter(u => {
          return (
            u.firstName
              .toLowerCase()
              .includes(this.userSearchInput.toLowerCase()) ||
            u.lastName
              .toLowerCase()
              .includes(this.userSearchInput.toLowerCase()) ||
            u.email
              .toLowerCase()
              .includes(this.userSearchInput.toLowerCase()) ||
            u.phone.toLowerCase().includes(this.userSearchInput.toLowerCase())

            // Doesn't work atm for some reason.
            // u.address.zipCode
            //   .toLowerCase()
            //   .includes(this.userSearchInput.toLowerCase())
          );
        });
      }
      return sorter.sortUserNamesABC(this.temps);
    },
    tableCaption() {
      return this.userSearchInput
        ? "Displaying results for " + '"' + this.userSearchInput + '"'
        : "Displaying all substitutes";
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
    },
    toggleFilter() {
      this.showFilters = !this.showFilters;
    }
  }
};
</script>

<style>
.addButton {
  margin: 20px auto;
}
.tableTop {
  margin: 20px auto;
}
</style>
