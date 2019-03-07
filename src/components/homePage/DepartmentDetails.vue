<template>
  <b-card style="margin-bottom: 10px;">
    <div slot="header" style="font-weight: 600">
      {{name}}
      <b-badge
        :variant="badgeColor"
      >{{totalOccupiedAppointments.occupied}}/{{totalOccupiedAppointments.total}}</b-badge>
    </div>
    <b-card-body>
      <b-card-text v-for="(workPeriod) in workPeriods" :key="workPeriod.id">
        <b-row>
          <WorkPeriodRow
            :workPeriod="workPeriod"
            :appointmentsInfo="workPeriodOccupiedAppointments(workPeriod)"
            :freeAppointments="workPeriod.appointments.filter(e => !e.owner)"
          ></WorkPeriodRow>
          <ScheduleButton md="6" :workPeriod="workPeriod" class="text-right"></ScheduleButton>
        </b-row>
        <hr
          v-if="workPeriods.length > 1 && workPeriods.indexOf(workPeriod) != workPeriods.length - 1"
          class="my-4"
        >
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
import UserTable from "../user/UserTable";
import AppointmentPopoverContent from "../appointment/AppointmentPopoverContent";
import ScheduleButton from "./ScheduleButton";
import WorkPeriodRow from "./WorkPeriodRow";
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
      showCollapse: false
    };
  },
  computed: {
    badgeColor() {
      return this.isFullyBooked ? "success" : "warning";
    },
    totalOccupiedAppointments() {
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
      const free = total - occupied;

      if (occupied == total) this.isFullyBooked = true;

      return { occupied: occupied, total: total, free: free };
    }
  },
  methods: {
    usersABC(users) {
      return sorter.sortUserNamesABC(users);
    },
    workPeriodOccupiedAppointments(workPeriod) {
      const occupiedApps = [];
      const unoccupiedApps = [];
      if (!workPeriod) {
        this.workPeriods.forEach(wp => {
          wp.appointments.forEach(a => {
            if (a.owner) {
              occupiedApps.push(a);
            } else {
              unoccupiedApps.push(a);
            }
          });
        });
      } else if (workPeriod) {
        workPeriod.appointments.forEach(a => {
          if (a.owner) {
            occupiedApps.push(a);
          } else {
            unoccupiedApps.push(a);
          }
        });
      }
      const total = occupiedApps.length + unoccupiedApps.length;
      const occupied = occupiedApps.length;
      const free = total - occupied;

      if (occupied == total) this.isFullyBooked = true;

      return { occupied: occupied, total: total, free: free };
    },
    goToWorkPeriod(id) {
      this.$router.push({ name: "workPeriod", params: { id: id } });
    }
  },
  components: {
    UserTable,
    ScheduleButton,
    WorkPeriodRow
  }
};
</script>

<style>
.wps {
  margin-top: 20px;
  font-weight: 700;
}
</style>
