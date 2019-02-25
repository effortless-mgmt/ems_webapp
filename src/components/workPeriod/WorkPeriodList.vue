<template>
  <b-list-group v-if="workPeriods.length">
    <workPeriod v-for="(item) in workPeriods" :key="item.name" :workPeriod="item"></workPeriod>
  </b-list-group>
</template>

<script>
import WorkPeriod from "./WorkPeriodListItem.vue";
export default {
  computed: {
    workPeriods() {
      return this.$store.state.workPeriods.workPeriods;
    }
  },
  components: {
    WorkPeriod
  },
  mounted() {
    this.$store.dispatch("workPeriods/refresh");
  }
};
</script>

<style>
</style>
