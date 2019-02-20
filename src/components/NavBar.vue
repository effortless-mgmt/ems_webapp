<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Effortless</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li v-if="!isLoggedIn" class="nav-item active nav-link">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="isLoggedIn" class="nav-item active nav-link">
          <router-link to="/">Home</router-link>
        </li>
        <li v-if="isLoggedIn" class="nav-item active nav-link">
          <router-link to="/temps">Temps</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import accountStore from "../store/accountStore";
export default {
  name: "navbar",
  computed: {
    isLoggedIn() {
      accountStore.getters.isLoggedIn;
    }
  },
  methods: {
    goToHome: function() {
      console.log("Home");
    }
  }
};
</script>

<style>
</style>
