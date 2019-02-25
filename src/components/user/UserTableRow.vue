<template>
  <tr @click="goToUser()">
    <td>{{ index + 1 }}</td>
    <td>{{ user.firstName }} {{ user.lastName }}</td>
    <td>{{ user.phone }}</td>
    <td>{{ user.email }}</td>
    <!-- FOR NOW -->
    <td>2300</td>
    <!-- <td>{{ user.zipCode }}</td> -->
  </tr>
</template>

<script>
export default {
  props: {
    user: Object,
    index: Number
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
