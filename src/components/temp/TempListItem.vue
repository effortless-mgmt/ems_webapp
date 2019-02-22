<template>
  <b-list-group-item>
    <div class="row">
      <div class="col-md-3">{{ temp.firstName }} {{ temp.lastName }}</div>
      <div class="col-md-3">{{ temp.phone }}</div>
      <div class="col-md-3">{{ temp.email }}</div>
      <div class="col-md-3">2300 København S</div>
      <!--
      NULL PÅ ALT DEMODATA PT
      <div class="col-md-3">{{ temp.address.zipCode }}</div>
      -->
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    temp: Object
  }
};
</script>

<style>
</style>
