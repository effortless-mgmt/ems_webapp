<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ appointment.start | moment('dddd')}}</td>
    <td>{{ appointment.start | moment('HH:mm')}}-{{ appointment.stop | moment('HH:mm')}}</td>
    <td v-if="appointment.owner">{{ appointment.owner.firstName }} {{ appointment.owner.lastName }}</td>
    <td v-else></td>
    <td>{{ appointment.start | moment('MM/DD/YYYY')}}</td>
  </tr>
</template>

<script>
export default {
  props: {
    appointment: Object,
    index: Number
  }
};
</script>

<style>
</style>
