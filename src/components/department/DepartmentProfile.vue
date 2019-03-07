<template>
  <b-container>
    <Toasts></Toasts>
    <b-card bg-variant="light" class="headerCard">
      <b-row class>
        <b-col>
          <h1>{{name}}</h1>
        </b-col>
        <b-col md="auto" align-self="center">
          <b-button
            v-if="!isEditable"
            @click="toggleEdit()"
            variant="outline-primary"
            class="editButton"
          >Edit</b-button>
        </b-col>
      </b-row>
      <div v-if="!isEditable">
        <b-list-group>
          <b-list-group-item>
            Pno:
            {{ pno }}
          </b-list-group-item>
          <b-list-group-item>
            <font-awesome-icon icon="address-card"/>
            {{ readableAddress }}
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-card>
    <b-card>
      <h4 slot="header">Work Periods</h4>
      <b-list-group>
        <b-list-group-item
          @click="goToWorkPeriod(item)"
          v-for="(item) in workPeriods"
          :key="item.id"
        >
          <b-row>
            <b-col>{{item.name}}</b-col>
            <b-col md="auto">
              <b-badge pill v-if="isWorkPeriodActive(item)" variant="success">Active</b-badge>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-container>
</template>

<script>
export default {
  props: {
    id: Number
  },
  data() {
    return {
      name: {},
      readableAddress: "",
      pno: 0,
      isEditable: false
    };
  },
  computed: {
    department() {
      return this.$store.state.departments.departments.find(
        d => d.id == this.id
      );
    },
    workPeriods() {
      return this.$store.getters["workPeriods/getByDepartmentId"](this.id);
    }
  },
  methods: {
    toggleEdit() {
      this.$toast.warning("Not implemented.");
    },
    isWorkPeriodActive(workPeriod) {
      var futureAppointment = workPeriod.appointments.find(
        a => new Date(a.start) > Date.now()
      );
      return futureAppointment ? true : false;
    },
    goToWorkPeriod(workPeriod) {
      this.$router.push({ name: "workPeriod", params: { id: workPeriod.id } });
    }
  },
  mounted() {
    this.readableAddress = this.department.address.readableAddress;
    this.pno = this.department.pno;
    this.name = this.department.name;

    //@TODO : Make get request for department ID only instead of fetching all work periods
    if (this.$store.state.workPeriods.workPeriods.length == 0) {
      this.$store.dispatch("workPeriods/refresh");
    }
  }
};
</script>

<style>
</style>
