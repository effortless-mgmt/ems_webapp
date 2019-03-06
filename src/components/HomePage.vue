<template>
  <div>
    <Toasts></Toasts>
    <b-container id="homePageContainer">
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
        <!-- <b-card-group columns> -->
        <DepartmentDetails
          v-for="(item) in departments"
          :key="item.id"
          :name="item.name"
          :workPeriods="getDepartmentWorkPeriods(item.id)"
          :address="item.address"
        ></DepartmentDetails>
        <!-- </b-card-group> -->
      </div>
      <div v-else class="d-flex justify-content-center mb-3">
        <b-spinner class="m1-auto" type="grow" label="Loading..."/>
      </div>
      <CreateSmsModal></CreateSmsModal>
      <!-- <b-alert
        :show="hasSentMessage"
        dismissible
        fade
        variant="success"
        @dismissed="clearMessage()"
        @dismiss-count-down="countDownChanged"
      >-->
      <div>You have succesfully sent a message to {{ message.recipients.length }} recipients.</div>
      <div>Your message: {{ message.message }}</div>
      <!-- </b-alert> -->
    </b-container>
  </div>
</template>

<script>
import CreateSmsModal from "./communication/CreateSmsModal";
import DepartmentDetails from "./department/DepartmentDetails";

export default {
  data() {
    return {
      userSearchInput: "",
      dismissCountDown: 0
    };
  },
  computed: {
    workPeriods() {
      return this.$store.state.workPeriods.todaysWorkPeriods;
    },

    departments() {
      const uniqueIds = [
        ...new Set(this.workPeriods.map(wp => wp.department.id))
      ];

      var depts = [];

      for (var i = 0; i < uniqueIds.length; i++) {
        var temp = this.workPeriods.find(
          wp => wp.department.id == uniqueIds[i]
        );
        depts.push(temp.department);
      }
      return depts;
    },
    isLoading() {
      return this.$store.state.departments.isLoading;
    },
    message() {
      return {
        recipients: this.$store.state.communication.smsRecipients,
        message: this.$store.state.communication.message
      };
    },
    hasSentMessage() {
      var hasSent = Object.keys(this.message).length > 0 ? true : false;
      if (hasSent) this.dismissCountDown = 5;
      return hasSent;
    }
  },
  mounted() {
    this.$store.dispatch("workPeriods/getTodaysWorkPeriods");
  },
  components: {
    DepartmentDetails,
    CreateSmsModal
  },
  methods: {
    getDepartmentWorkPeriods(id) {
      return this.workPeriods.filter(wp => wp.department.id === id);
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
      if (this.dismissCountDown == 0) {
        this.clearMessage();
      }
    },
    clearMessage() {
      this.$store.dispatch("communication/reset");
    }
  }
};
</script>

<style>
</style>
