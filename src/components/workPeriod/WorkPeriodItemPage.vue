<template>
  <div v-if="workPeriod">
    <h1>{{ workPeriod.department.name }}</h1>
    <b-container fluid>
      <div class="panel">
        <div class="panel-heading">
          <h4 class="panel-title">{{ workPeriod.name }}</h4>
        </div>
        <AppointmentTable :appointments="workPeriod.appointments"></AppointmentTable>
      </div>
    </b-container>
  </div>
</template>

<script>
import AppointmentTable from "../appointment/AppointmentTable";

export default {
  props: {
    id: Number
  },
  computed: {
    workPeriod() {
      return this.$store.getters["workPeriods/getById"](this.id);
    }
  },
  components: {
    AppointmentTable
  }
};
</script>

<style>
</style>
