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
            Vat:
            {{ vat }}
          </b-list-group-item>
          <b-list-group-item>
            <font-awesome-icon icon="address-card"/>
            {{ readableAddress }}
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-card>
    <b-card>
      <h4 slot="header">Departments</h4>
      <b-list-group>
        <b-list-group-item v-for="(item) in departments" :key="item.id">{{item.name}}</b-list-group-item>
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
      vat: 0,
      isEditable: false
    };
  },
  computed: {
    company() {
      return this.$store.state.companies.companies.find(c => c.id == this.id);
    },
    departments() {
      return this.$store.getters["departments/getByCompanyId"](this.id);
    }
  },
  methods: {
    toggleEdit() {
      this.$toast.warning("Not implemented.");
    }
  },
  mounted() {
    this.readableAddress = this.company.address.readableAddress;
    this.vat = this.company.vat;
    this.name = this.company.name;
  }
};
</script>

<style>
</style>
