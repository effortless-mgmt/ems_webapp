<template>
  <div>
    <h1>Temps</h1>
    <b-container>
      <b-list-group v-if="temps.length">
        <b-list-group-item v-for="(item) in temps" :key="item.id">
          <div>{{ item.firstName }} {{ item.lastName }}</div>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
export default {
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
