<template>
  <div>
    <b-list-group-item @click="goToWorkPeriod()">{{ workPeriod.name }}</b-list-group-item>
  </div>
</template>

<script>
export default {
  props: {
    workPeriod: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToWorkPeriod() {
      this.$router.push({
        name: "workPeriod",
        params: { id: this.workPeriod.id }
      });
    }
  }
};
</script>

<style>
</style>
