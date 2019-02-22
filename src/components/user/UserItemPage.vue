<template>
  <h1 v-if="user">{{ user.firstName }} {{ user.lastName }}</h1>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true
    }
  },
  computed: {
    user() {
      return this.$store.getters["users/getUserByUserName"](this.userName);
    }
  }
};
</script>

<style>
</style>
