<template>
  <b-card style="margin-bottom: 10px;">
    <div slot="header" style="font-weight: 600">
      {{name}}
      <b-badge :variant="badgeColor">{{totalAssignedUsers}}</b-badge>
    </div>
    <b-card-body>
      <b-card-text v-for="(workPeriod) in workPeriods" :key="workPeriod.id">
        <b-row>
          <b-col
            @click="goToWorkPeriod(workPeriod.id)"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{ active: hover }"
            align-self="center"
          >{{workPeriod.name}}</b-col>
          <b-col md="6" :id="'popoverContainer'+workPeriod.id" class="text-right">
            <b-button
              :id="'usersPopover'+workPeriod.id"
              variant="info"
              @click="triggerPopover"
            >{{ workPeriod.appointments.length }} Temps</b-button>
          </b-col>

          <b-popover
            :target="'usersPopover'+workPeriod.id"
            triggers="click"
            :show.sync="popoverShow"
            placement="auto"
            :container="'popoverContainer'+workPeriod.id"
            ref="popover"
            @show="onShow"
            @shown="onShown"
            @hidden="onHidden"
          >
            <template slot="title">Temps</template>
            <AppointmentPopoverContent :appointments="workPeriod.appointments"></AppointmentPopoverContent>
          </b-popover>
        </b-row>
        <hr v-if="workPeriods.length > 1" class="my-4">
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
import UserTable from "../user/UserTable";
import AppointmentPopoverContent from "../appointment/AppointmentPopoverContent";
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
      hover: false,
      popoverShow: false
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
    },
    goToWorkPeriod(id) {
      this.$router.push({ name: "workPeriod", params: { id: id } });
    },
    onShow() {},
    onShown() {},
    onHidden() {},
    triggerPopover() {
      this.$root.$emit("bv::hide::popover");
      this.popoverShow = !this.popoverShow;
    }
  },
  components: {
    UserTable,
    AppointmentPopoverContent
  }
};
</script>

<style>
.wps {
  margin-top: 20px;
  font-weight: 700;
}
.active {
  text-decoration: underline;
  cursor: pointer;
}
</style>
