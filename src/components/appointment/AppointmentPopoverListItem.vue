<template>
  <b-row v-if="appointment.owner">
    <b-col md="5">{{ appointment.start | moment('HH:mm')}}-{{ appointment.stop | moment('HH:mm')}}</b-col>
    <b-col
      md="5"
      v-if="appointment.owner"
    >{{ appointment.owner.firstName }} {{ appointment.owner.lastName }}</b-col>
    <b-col md="2">
      <b-form-checkbox-group v-model="selected">
        <b-form-checkbox :value="appointment.owner"></b-form-checkbox>
      </b-form-checkbox-group>
    </b-col>
  </b-row>
  <b-row v-else class="noOwner">
    <b-col
      md="5"
      align-self="center"
    >{{ appointment.start | moment('HH:mm')}}-{{ appointment.stop | moment('HH:mm')}}</b-col>
    <b-col md="5"></b-col>
    <b-col md="2"></b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    appointment: Object
  },
  data() {
    return {
      selected: []
    };
  }
};
</script>

<style>
</style>
