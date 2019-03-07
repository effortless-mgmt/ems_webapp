<template>
  <div>
    <b-row>
      <b-col md="5" class="header">Time</b-col>
      <b-col md="5" class="header">Temp</b-col>
      <b-col md="2">
        <font-awesome-icon icon="envelope"/>
      </b-col>
    </b-row>
    <hr class="headerHr">

    <div v-for="(item) in appointments" :key="item.id">
      <b-row v-if="item.owner">
        <b-col md="5">{{ item.start | moment('HH:mm')}}-{{ item.stop | moment('HH:mm')}}</b-col>
        <b-col md="5" v-if="item.owner">{{ item.owner.firstName }} {{ item.owner.lastName }}</b-col>
        <b-col md="2">
          <b-form-checkbox-group v-model="selected">
            <b-form-checkbox :value="item.owner"></b-form-checkbox>
          </b-form-checkbox-group>
        </b-col>
      </b-row>
      <b-row v-else class="noOwner">
        <b-col
          align-self="center"
        >{{ item.start | moment('HH:mm')}}-{{ item.stop | moment('HH:mm')}}</b-col>
      </b-row>
    </div>
    <hr>
    <b-row class="text-center">
      <b-col>
        <b-button
          v-b-modal.createSms
          variant="primary"
          @click="setRecipients(selected)"
          :disabled="!hasSelected"
        >Sms</b-button>
      </b-col>
      <b-col>
        <b-button variant="primary" :disabled="!hasSelected">Email</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    appointments: [Array, Object]
  },
  data() {
    return {
      selected: []
    };
  },
  computed: {
    hasSelected() {
      return Object.keys(this.selected).length > 0 ? true : false;
    }
  },
  methods: {
    setRecipients(selected) {
      this.$store.dispatch("communication/storeSmsRecipients", selected);
    }
  }
};
</script>

<style>
.header {
  font-weight: 600;
}
.headerHr {
  margin-top: 5px;
}
.noOwner {
  background: rgb(204, 204, 204);
  background: rgba(253, 58, 58, 0.5);
}
</style>
