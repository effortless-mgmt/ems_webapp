<template>
  <b-navbar toggleable="lg" fixed="top" type="dark" class="theNavbar">
    <b-navbar-brand href="/">
      <img src="../../assets/ems_logo.png" class="ems_logo">
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"/>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item v-if="isLoggedIn">
          <router-link class="nav-link" to="/" exact>Home</router-link>
        </b-nav-item>
        <b-nav-item v-if="isLoggedIn">
          <router-link class="nav-link temps" to="/temps">Temps</router-link>
        </b-nav-item>
        <b-nav-item v-if="isLoggedIn">
          <router-link class="nav-link" to="/companies">Companies</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
      <UserDropDown class="dropDown"></UserDropDown>
    </b-collapse>
  </b-navbar>
</template>

<script>
import UserDropDown from "./UserDropDown";
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
  },
  components: {
    UserDropDown
  }
};
</script>

<style>
.ems_logo {
  max-width: 40px;
}
.theNavbar {
  max-height: 50px;
  background: darkslategrey;
}
.dropDown {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
