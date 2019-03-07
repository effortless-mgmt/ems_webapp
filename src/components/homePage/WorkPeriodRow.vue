<template>
  <b-col :id="'workPeriod'+workPeriod.id" align-self="center">
    <div v-if="appointmentsInfo.free > 0">
      <b-badge
        :id="'unbookedPopover'+workPeriod.id"
        pill
        variant="warning"
        @mouseover="popoverShow = true"
        @mouseleave="popoverShow = false"
      >{{appointmentsInfo.free}} unbooked</b-badge>
    </div>
    <div
      @click="goToWorkPeriod(workPeriod.id)"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ active: hover }"
    >{{workPeriod.name}}</div>

    <b-popover
      v-if="appointmentsInfo.free > 0"
      :target="'unbookedPopover'+workPeriod.id"
      :show="popoverShow"
      placement="auto"
      ref="popover"
    >
      <template slot="title">Unbooked appointments</template>
      <b-row v-for="(item) in freeAppointments" :key="item.id">
        <b-col
          align-self="center"
        >{{ item.start | moment('HH:mm')}}-{{ item.stop | moment('HH:mm')}}</b-col>
        <b-col md="auto"></b-col>
      </b-row>
    </b-popover>
  </b-col>
</template>

<script>
import AppointmentPopoverListItem from "../appointment/AppointmentPopoverListItem";
export default {
  props: {
    workPeriod: Object,
    appointmentsInfo: Object,
    freeAppointments: [Array, Object]
  },
  data() {
    return {
      hover: false,
      popoverShow: false
    };
  },
  methods: {
    goToWorkPeriod(id) {
      this.$router.push({ name: "workPeriod", params: { id: id } });
    }
  },
  components: {
    AppointmentPopoverListItem
  }
};
</script>

<style>
.active {
  text-decoration: underline;
  cursor: pointer;
}
</style>
