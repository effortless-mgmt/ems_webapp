<template>
  <div v-if="user">
    <b-container fluid>
      <b-jumbotron>
        <h1>{{ user.firstName }} {{ user.lastName }}</h1>

        <b-img-lazy :src="user.profilePictureUrl" class="profilePic"></b-img-lazy>
      </b-jumbotron>

      <div v-if="!isEditable">
        <b-row>
          <b-col lg="1">Phone:</b-col>
          <b-col lg="1">{{ user.phone }}</b-col>
        </b-row>
        <b-row>
          <b-col lg="1">Email:</b-col>
          <b-col lg="1">{{ user.email }}</b-col>
        </b-row>
        <b-row>
          <b-col lg="1">Address:</b-col>
          <b-col v-if="user.address" lg="1">{{ user.address.readableAddress }}</b-col>
        </b-row>
      </div>
      <b-form v-else>
        <b-form-group label-cols="1" label="Phone:" label-for="phone-input">
          <b-input v-model="phone" id="phone-input" :placeholder="user.phone" :value="user.phone"></b-input>
        </b-form-group>
        <b-form-group label-cols="1" label="Email:" label-for="email-input">
          <b-input v-model="email" id="email-input" :placeholder="user.email" :value="user.email"></b-input>
        </b-form-group>
        <b-form-group label-cols="1" label="Address:" label-for="address-input">
          <b-input v-model="address.street" id="address-input" placeholder="Street"></b-input>
          <b-input v-model="address.no" placeholder="Number" :value="address.no"></b-input>
          <b-input v-model="address.floor" placeholder="Floor" :value="address.floor"></b-input>
          <b-input v-model="address.side" placeholder="Side" :value="address.side"></b-input>
          <b-input v-model="address.city" placeholder="City" :value="address.city"></b-input>
          <b-input v-model="address.state" placeholder="State" :value="address.state"></b-input>
          <b-input v-model="address.zipCode" placeholder="Zip Code" :value="address.zipCode"></b-input>
          <b-input v-model="address.country" placeholder="Country" :value="address.country"></b-input>
        </b-form-group>
      </b-form>
      <b-row v-if="!isEditable">
        <b-col md="1" offset-md="11" align-self="center">
          <b-button @click="openEdit()" variant="primary">Edit</b-button>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col md="1" offset-md="10">
          <b-button @click="openEdit()" variant="light">Cancel</b-button>
        </b-col>
        <b-col md="1">
          <b-button @click="openEdit()" variant="primary">Accept</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      phone: 0,
      email: "",
      address: {},
      isEditable: false
    };
  },
  props: {
    userName: {
      type: String,
      required: true
    }
  },
  computed: {
    user() {
      return this.$store.getters["users/getUserByUserName"](this.userName);
    }
  },
  methods: {
    openEdit() {
      if (!this.isEditable) {
        this.isEditable = true;
      } else this.isEditable = false;
      console.log(this.phone);
    },
    updateUser() {}
  },
  mounted() {
    this.username = this.user.userName;
    this.password = this.user.password;
    this.phone = this.user.phone;
    this.email = this.user.email;

    if (this.user.address != null) {
      this.address = this.user.address;
    } else {
      this.address = {
        street: "",
        no: null,
        floor: "",
        side: "",
        city: "",
        state: "",
        zipCode: null,
        country: ""
      };
    }
  }
};
</script>

<style>
.profilePic {
  width: 20%;
}
</style>
