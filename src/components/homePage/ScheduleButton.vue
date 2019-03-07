<template>
  <b-col :md="md">
    <b-button :id="'usersPopover'+workPeriod.id" variant="info" @click="triggerPopover">Schedule</b-button>

    <b-popover
      :target="'usersPopover'+workPeriod.id"
      triggers="click"
      :show.sync="popoverShow"
      placement="auto"
      ref="popover"
      @show="onShow"
      @shown="onShown"
      @hidden="onHidden"
    >
      <template slot="title">
        <b-row>
          <b-col>Appointments</b-col>
          <b-col>
            <b-button @click="onClose" class="close">
              <span>&times;</span>
            </b-button>
          </b-col>
        </b-row>
      </template>
      <AppointmentPopoverContent :appointments="workPeriod.appointments"></AppointmentPopoverContent>
    </b-popover>
  </b-col>
</template>

<script>
import AppointmentPopoverContent from "../appointment/AppointmentPopoverContent";
export default {
  props: {
    workPeriod: Object,
    md: 0
  },
  data() {
    return {
      popoverShow: false
    };
  },
  methods: {
    onClose() {
      this.popoverShow = false;
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
    AppointmentPopoverContent
  }
};
</script>

<style>
</style>
