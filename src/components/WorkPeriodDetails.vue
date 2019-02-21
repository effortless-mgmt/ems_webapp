<template>
  <b-list-group-item>{{ workPeriod.name }}</b-list-group-item>
</template>

<script>
export default {
  props: {
    workPeriod: {
      type: Object
    }
  }
};
</script>

<style>
</style>
