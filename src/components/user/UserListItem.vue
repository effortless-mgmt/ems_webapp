<template>
  <b-list-group-item @click="goToUser()">
    <div class="row">
      <div class="col-md-3">{{ user.firstName }} {{ user.lastName }}</div>
      <div class="col-md-3">{{ user.phone }}</div>
      <div class="col-md-3">{{ user.email }}</div>
      <div class="col-md-3">2300 København S</div>
      <!--
      NULL PÅ ALT DEMODATA PT
      <div class="col-md-3">{{ temp.address.zipCode }}</div>
      -->
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    user: Object
  },
  methods: {
    goToUser() {
      this.$router.push({
        name: "user",
        params: { userName: this.user.userName }
      });
    }
  }
};
</script>

<style>
</style>
