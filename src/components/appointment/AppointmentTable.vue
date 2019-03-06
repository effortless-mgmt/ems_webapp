<template>
  <div v-if="appointmentsSorted">
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col" style="width: 5%">#</th>
          <th scope="col" style="width: 10%">Day</th>
          <th scope="col" style="width: 10%">Time</th>
          <th scope="col">Temp</th>
          <th scope="col" style="width: 10%">Date</th>
        </tr>
      </thead>
      <tbody>
        <AppointmentTableRow
          v-for="(item, index) in appointmentsSorted"
          :key="item.id"
          :appointment="item"
          :index="index"
        ></AppointmentTableRow>
      </tbody>
      <!-- <tfoot>PAGINATION</tfoot> -->
    </table>
  </div>
</template>

<script>
import AppointmentTableRow from "./AppointmentTableRow";
export default {
  props: {
    appointments: {
      type: Array,
      default: () => ({})
    }
  },
  computed: {
    appointmentsSorted() {
      return this.appointments.sort((a, b) => {
        var startA = new Date(a.start);
        var startB = new Date(b.start);
        return startA - startB;
      });
    }
  },
  components: {
    AppointmentTableRow
  }
};
</script>

<style>
.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th {
  background-color: #ccc;
}
</style>
