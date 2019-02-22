<template>
  <b-list-group-item>
    <div class="row">
      <div class="col-md-2">{{ appointment.start }}</div>
      <div class="col-md-2">{{ appointment.stop }}</div>
      <div
        v-if="appointment.owner"
        class="col-md-4"
      >{{ appointment.owner.firstName }} {{ appointment.owner.lastName }}</div>
      <div v-else class="col-md-4">
        <strong>VACANT</strong>
      </div>
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    appointment: Object
  }
};
</script>

<style>
</style>
