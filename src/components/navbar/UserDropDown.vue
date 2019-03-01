<template>
  <b-navbar-nav>
    <b-nav-item-dropdown right>
      <!-- Using button-content slot -->
      <template slot="button-content">{{ user.userName }}</template>
      <b-dropdown-item @click="goToProfile()">Profile</b-dropdown-item>
      <b-dropdown-item @click="logout()">Sign out</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["account/getUser"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("account/logout").then(() => {
        this.$router.push("/login");
      });
    },
    goToProfile() {
      console.log("Not implemented.");
    }
  }
};
</script>

<style>
</style>
