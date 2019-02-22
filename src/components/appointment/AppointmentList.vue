<template>
  <b-list-group>
    <AppointmentListItem v-for="(item) in appointments" :key="item.id" :appointment="item"></AppointmentListItem>
  </b-list-group>
</template>

<script>
import AppointmentListItem from "./AppointmentListItem";
export default {
  props: {
    appointments: [Array, Object]
  },
  components: {
    AppointmentListItem
  }
};
</script>

<style>
</style>
