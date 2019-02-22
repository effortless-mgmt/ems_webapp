<template>
  <h1 v-if="workPeriod">{{ workPeriod.name }}</h1>
</template>

<script>
export default {
  props: {
    id: Number
  },
  computed: {
    workPeriod() {
      return this.$store.getters["workPeriods/getById"](this.id);
    }
  }
};
</script>

<style>
</style>
