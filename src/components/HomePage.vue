<template>
  <div>
    <div v-if="!isLoading">
      <departmentDetails
        v-for="(item) in departments"
        :key="item.id"
        :name="item.name"
        description="<insert description>"
        :workPeriods="getDepartmentWorkPeriods(item.id)"
        :address="item.address"
      ></departmentDetails>
    </div>
    <div v-else class="d-flex justify-content-center mb-3">
      <b-spinner class="m1-auto" type="grow" label="Loading..."/>
    </div>
  </div>
</template>

<script>
import departmentDetails from "./department/DepartmentDetails";

export default {
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
      const wps = this.workPeriods.filter(wp => wp.department.id === id);
      return wps;
    }
  }
};
</script>

<style>
</style>
