<template>
  <div>
    <b-container>
      <b-jumbotron bg-variant="info" text-variant="white">
        <template slot="header">Today</template>
        <template
          slot="lead"
        >Get a quick overview of what is happening today. Use the search bar below to search for a specific department, work period or assigned user.</template>
        <hr class="my-4">
        <b-input-group>
          <b-input-group-text slot="prepend">
            <font-awesome-icon icon="search"></font-awesome-icon>
          </b-input-group-text>
          <b-input v-model="userSearchInput" placeholder="Search today"></b-input>
        </b-input-group>
      </b-jumbotron>
      <div v-if="userSearchInput">Displaying results for "{{ userSearchInput }}"</div>
      <div v-if="!isLoading">
        <departmentDetails
          v-for="(item) in departments"
          :key="item.id"
          :name="item.name"
          :workPeriods="getDepartmentWorkPeriods(item.id)"
          :address="item.address"
        ></departmentDetails>
      </div>
      <div v-else class="d-flex justify-content-center mb-3">
        <b-spinner class="m1-auto" type="grow" label="Loading..."/>
      </div>
    </b-container>
  </div>
</template>

<script>
import departmentDetails from "./department/DepartmentDetails";

export default {
  data() {
    return {
      userSearchInput: ""
    };
  },
  computed: {
    departments() {
      return this.$store.state.departments.departments;
    },
    workPeriods() {
      return this.$store.state.workPeriods.workPeriods;
    },
    isLoading() {
      return this.$store.state.departments.isLoading;
    }
  },
  mounted() {
    this.$store.dispatch("departments/refresh");
    this.$store.dispatch("workPeriods/refresh");
  },
  components: {
    departmentDetails
  },
  methods: {
    getDepartmentWorkPeriods(id) {
      const today = new Date();
      const wps = this.workPeriods.filter(wp => wp.department.id === id);
      const wpsToday = wps.filter(wp => wp.appointments.length > 0);
      var apps;
      wpsToday.filter(wp => {
        apps = wp.appointments.filter(app => {
          var start = new Date(app.start);
          return (
            start.getDate() === today.getDate() &&
            start.getMonth() === today.getMonth() &&
            start.getFullYear() === today.getFullYear()
          );
        });
        wp.appointments = apps;
      });
      console.log(wpsToday);
      return wpsToday;
    }
  }
};
</script>

<style>
</style>
