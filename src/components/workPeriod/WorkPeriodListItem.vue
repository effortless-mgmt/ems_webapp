<template>
  <div>
    <b-list-group-item @click="goToWorkPeriod()">{{ workPeriod.name }}</b-list-group-item>
    <b-container fluid v-if="showAppointments">
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
    },
    showAppointments: {
      type: Boolean
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
  methods: {
    goToWorkPeriod() {
      this.$router.push({
        name: "workPeriod",
        params: { id: this.workPeriod.id }
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
