<template>
  <div>
    <h1>Home</h1>

    <b-list-group v-if="!isLoading">
      <b-list-group-item v-for="(item) in departments" :key="item.id">{{item.name}}</b-list-group-item>
    </b-list-group>
    <div v-else class="d-flex justify-content-center mb-3">
      <b-spinner class="m1-auto" type="grow" label="Loading..."/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    departments() {
      return this.$store.state.departments.departments;
    },
    isLoading() {
      return this.$store.state.departments.isLoading;
    }
  },
  mounted() {
    this.$store.dispatch("departments/refresh");
  }
};
</script>

<style>
</style>
