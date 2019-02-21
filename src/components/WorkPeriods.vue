<template>
  <div>
    <h1>Work periods</h1>
    <b-list-group v-if="workPeriods.length">
      <workPeriod v-for="(item) in workPeriods" :key="item.id" :workPeriod="item"></workPeriod>
    </b-list-group>
  </div>
</template>

<script>
import WorkPeriod from "./WorkPeriodDetails.vue";
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
