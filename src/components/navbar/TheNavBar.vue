<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand>Effortless</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"/>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item v-if="isLoggedIn">
          <router-link class="nav-link" to="/" exact>Home</router-link>
        </b-nav-item>
        <b-nav-item v-if="isLoggedIn">
          <router-link class="nav-link" to="/temps">Temps</router-link>
        </b-nav-item>
        <b-nav-item v-if="isLoggedIn">
          <router-link class="nav-link" to="/workperiods">Work Periods</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">User</template>
          <b-dropdown-item @click="logout()">Sign out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    isLoggedIn() {
      return this.$store.getters["account/isLoggedIn"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("account/logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
</style>
