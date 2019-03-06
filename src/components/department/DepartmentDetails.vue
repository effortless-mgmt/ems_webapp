<template>
  <b-card style="margin-bottom: 10px" header-border-variant="dark">
    <b-row slot="header">
      <b-col md="11" style="font-weight: 550">{{name}}</b-col>
      <b-col>
        <b-badge :variant="badgeColor">{{totalAssignedUsers}}</b-badge>
      </b-col>
    </b-row>
    <div v-for="(workPeriod) in workPeriods" :key="workPeriod.id">
      <b-row>
        <b-col md="3">
          <div id="name">{{workPeriod.name}}</div>
        </b-col>
        <b-col align-self="center">
          <b-badge variant="primary">{{ workPeriod.appointments.length }}</b-badge>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import UserTable from "../user/UserTable";
import * as sorter from "../../utils/sortUtils";
export default {
  props: {
    name: String,
    workPeriods: [Array, Object],
    description: String,
    agreement: Object,
    department: Object,
    address: Object,
    appointments: [Array, Object]
  },
  data() {
    return {
      isFullyBooked: false,
      showCollapse: false,
      hover: false
    };
  },
  computed: {
    totalAssignedUsers() {
      const occupiedApps = [];
      const unoccupiedApps = [];
      this.workPeriods.forEach(wp => {
        wp.appointments.forEach(a => {
          if (a.owner) {
            occupiedApps.push(a);
          } else {
            unoccupiedApps.push(a);
          }
        });
      });
      const total = occupiedApps.length + unoccupiedApps.length;
      const occupied = occupiedApps.length;

      if (occupied == total) this.isFullyBooked = true;

      return occupied + "/" + total;
    },
    badgeColor() {
      return this.isFullyBooked ? "success" : "warning";
    }
  },
  methods: {
    usersABC(users) {
      return sorter.sortUserNamesABC(users);
    }
  },
  components: {
    UserTable
  }
};
</script>

<style>
.wps {
  margin-top: 20px;
  font-weight: 700;
}
</style>
