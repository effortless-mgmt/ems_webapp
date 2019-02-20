<template>
  <div>
    <h1>Temps</h1>
    <div v-for="(item) in temps" :key="item.id">
      <li>{{ item.userName }}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "temps",
  computed: {
    temps() {
      return this.$store.state.temps.temps;
    }
  },
  mounted() {
    this.$store.dispatch("temps/refresh");
  }
};
</script>

<style>
</style>
