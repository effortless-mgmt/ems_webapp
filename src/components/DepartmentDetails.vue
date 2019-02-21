<template>
  <b-card style="margin: 20px auto;">
    <h3>{{ name }}</h3>
    <h5 class="wps">Work Periods</h5>

    <b-container fluid>
      <div v-for="(workPeriod, index) in workPeriods" :key="workPeriod.id">
        <b-row>
          <h5 :id="'popover-'+workPeriod.id" variant="primary">{{ index + 1}} {{workPeriod.name}}</h5>
          <b-popover
            :target="'popover-'+workPeriod.id"
            title="Address"
            placement="right"
            triggers="hover focus"
            :content="workPeriod.department.address.readableAddress"
          />
          <b-col>{{ description }}</b-col>
        </b-row>
        <b-button
          @click="showCollapse = !showCollapse"
          :class="showCollapse ? 'collapsed' : null"
          aria-controls="collapse"
          :aria-expanded="showCollapse ? 'true' : 'false'"
        >Assigned users</b-button>
        <b-collapse class="mt-2" v-model="showCollapse" id="collapse">
          <b-list-group>
            <b-list-group-item
              v-for="(user) in workPeriod.assignedUsers"
              :key="user.id"
            >{{user.firstName}}</b-list-group-item>
          </b-list-group>
        </b-collapse>
      </div>
    </b-container>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      showCollapse: false,
      hover: false
    };
  },
  props: {
    name: String,
    workPeriods: [Array, Object],
    description: String,
    agreement: Object,
    department: Object,
    address: Object,
    appointments: [Array, Object]
  },
  methods: {
    print() {
      console.log(this.workPeriods[0].assignedUsers);
    }
  }
};
</script>

<style>
.wps {
  margin-top: 20px;
  font-weight: 700;
}
</style>
