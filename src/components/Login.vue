<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$store.dispatch("account/login");
    }
  }
};
</script>

<style>
.test {
  background: red;
}
</style>
