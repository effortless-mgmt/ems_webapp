<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Effortless</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item active nav-link">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="nav-item active nav-link">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item active nav-link">
          <router-link to="/temps">Temps</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    goToHome: function() {
      console.log("Home");
    }
  }
};
</script>

<style>
</style>
