<template>
  <b-card style="margin-bottom: 20px">
    <b-card-header>{{ name }}</b-card-header>
    <h5 class="wps">Work Periods</h5>
    <b-container>
      <div v-for="(workPeriod) in workPeriods" :key="workPeriod.id">
        <b-row>
          <h5 :id="'popover-'+workPeriod.id" variant="primary">{{workPeriod.name}}</h5>
        </b-row>
        {{ workPeriod.appointments.length }}
        <!-- <b-button
          @click="showCollapse = !showCollapse"
          :class="showCollapse ? 'collapsed' : null"
          :aria-controls="'collapse-'+workPeriod.id"
          :aria-expanded="showCollapse ? 'true' : 'false'"
        >Assigned users</b-button>
        <b-collapse class="mt-2" v-model="showCollapse" :id="'collapse-'+ workPeriod.id">
          <UserTable :users="workPeriod.assignedUsers"></UserTable>
        </b-collapse>-->
      </div>
    </b-container>
  </b-card>
</template>

<script>
import UserTable from "../user/UserTable";
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
      showCollapse: false,
      hover: false
    };
  },
  methods: {
    usersABC(users) {
      return sorter.sortUserNamesABC(users);
    }
  },
  components: {
    UserTable
  }
};
</script>

<style>
.wps {
  margin-top: 20px;
  font-weight: 700;
}
</style>
