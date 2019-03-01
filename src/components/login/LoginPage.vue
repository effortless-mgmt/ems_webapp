<template>
  <div>
    <h1 class="login">Login</h1>
    <b-container>
      <b-form @submit="login">
        <b-form-group label="Username" label-for="usernameInput">
          <b-form-input
            id="usernameInput"
            v-model="username"
            type="text"
            placeholder="Enter username"
          />
        </b-form-group>

        <b-form-group label="Password" label-for="password-input">
          <b-form-input v-model="password" type="password" placeholder="Enter password"/>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
      <div v-if="error" class="row errorMessage">{{ error[0].message }}</div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    error() {
      return this.$store.getters.getErrors;
    }
  },
  methods: {
    login(evt) {
      evt.preventDefault();
      this.$store
        .dispatch("account/login", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>

<style>
.errorMessage {
  justify-content: center;
  color: red;
}
.login {
  text-align: center;
}
</style>
