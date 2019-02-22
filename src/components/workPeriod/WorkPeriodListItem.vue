<template>
  <div>
    <b-list-group-item>{{ workPeriod.name }}</b-list-group-item>
    <b-container fluid>
      <AppointmentList :appointments="appointmentsSorted"></AppointmentList>
    </b-container>
  </div>
</template>

<script>
import AppointmentList from "../appointment/AppointmentList";
export default {
  props: {
    workPeriod: {
      type: Object,
      required: true
    }
  },
  computed: {
    appointmentsSorted() {
      return this.workPeriod.appointments.sort((a, b) => {
        var startA = new Date(a.start);
        var startB = new Date(b.start);
        return startA < startB;
      });
    }
  },
  components: {
    AppointmentList
  }
};
</script>

<style>
</style>
