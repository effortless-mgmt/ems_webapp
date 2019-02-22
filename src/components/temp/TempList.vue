<template>
  <div>
    <b-container fluid>
      <div class="row list-header">
        <div class="col-md-3">Name</div>
        <div class="col-md-3">Phone</div>
        <div class="col-md-3">Email</div>
        <div class="col-md-3">Zip Code</div>
      </div>
    </b-container>
    <b-list-group v-if="temps.length">
      <UserListItem v-for="(item) in tempsABC" :key="item.id" :user="item"></UserListItem>
    </b-list-group>
  </div>
</template>

<script>
import UserListItem from "../user/UserListItem";
export default {
  computed: {
    temps() {
      return this.$store.state.users.temps;
    },
    tempsABC() {
      return this.tempsAlphabetial();
    }
  },
  mounted() {
    this.$store.dispatch("users/getTemps");
  },
  methods: {
    tempsAlphabetial() {
      return this.temps.sort(function(a, b) {
        var A = a.firstName.toUpperCase();
        var AL = a.lastName.toUpperCase();
        var B = b.firstName.toUpperCase();
        var BL = b.lastName.toUpperCase();

        if (A < B) return -1;
        if (A > B) return 1;
        if (AL < BL) return -1;
        if (AL > BL) return 1;

        return 0;
      });
    }
  },
  components: {
    UserListItem
  }
};
</script>

<style>
.list-header {
  font-size: 1.1em;
  font-weight: 600;
}
</style>
