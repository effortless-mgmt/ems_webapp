<template>
  <b-container>
    <b-card bg-variant="light">
      <h3>Create User</h3>
      <b-form @submit="onSubmit">
        <b-form-group label="Contact" label-cols="3" label-size="lg" label-class="font-weight-bold">
          <b-form-group
            label-cols="3"
            label="First Name:"
            label-for="firstName"
            label-align-sm="right"
          >
            <b-form-input v-model="user.firstName" type="text" required id="firstName"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="3"
            label="Last Name:"
            label-for="lastName"
            label-align-sm="right"
          >
            <b-form-input v-model="user.lastName" type="text" required id="lastName"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="Phone:" label-for="phone" label-align-sm="right">
            <b-form-input v-model="user.phone" type="text" required id="phone"></b-form-input>
            <small label-for="phone">We'll never share your phone number with anyone else.</small>
          </b-form-group>
          <b-form-group label-cols="3" label="Email:" label-for="email" label-align-sm="right">
            <b-form-input v-model="user.email" type="email" required id="email"></b-form-input>
            <small label-for="email">We'll never share your email with anyone else.</small>
          </b-form-group>
        </b-form-group>
        <b-form-group label="Address" label-cols="3" label-size="lg" label-class="font-weight-bold">
          <b-form-group label-cols="3" label="Street:" label-for="street" label-align-sm="right">
            <b-input v-model="user.address.street" required id="street"></b-input>
          </b-form-group>
          <b-form-group label-cols="3" label="No:" label-for="number" label-align-sm="right">
            <b-input v-model="user.address.no" required id="number"></b-input>
          </b-form-group>
          <b-form-group label-cols="3" label="Floor:" label-for="floor" label-align-sm="right">
            <b-input v-model="user.address.floor" id="floor"></b-input>
          </b-form-group>
          <b-form-group label-cols="3" label="Side:" label-for="side" label-align-sm="right">
            <b-form-input v-model="user.address.side" id="side"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="3"
            label="City:"
            required
            label-for="city"
            label-align-sm="right"
          >
            <b-form-input v-model="user.address.city" required id="city"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="Zip Code:" label-for="zipCode" label-align-sm="right">
            <b-input v-model="user.address.zipCode" required id="zipCode"></b-input>
          </b-form-group>
          <b-form-group label-cols="3" label="State:" label-for="state" label-align-sm="right">
            <b-input v-model="user.address.state" id="state"></b-input>
          </b-form-group>
          <b-form-group label-cols="3" label="Country:" label-for="country" label-align-sm="right">
            <b-input v-model="user.address.country" required id="country"></b-input>
          </b-form-group>
        </b-form-group>
        <b-form-group label-cols="3" label="Account" label-size="lg" label-class="font-weight-bold">
          <b-form-group
            label-cols="3"
            label="Username:"
            label-for="username"
            label-align-sm="right"
          >
            <b-input v-model="user.userName" required id="username"></b-input>
          </b-form-group>
          <b-form-group
            label-cols="3"
            label="Password:"
            label-for="password"
            label-align-sm="right"
          >
            <b-input v-model="user.passWord" type="password" required id="password"></b-input>
          </b-form-group>
          <b-form-group label-cols="3" label="Role:" label-for="role" label-align-sm="right">
            <b-form-select v-model="user.primaryRole" required :options="roleTypes" id="role"/>
          </b-form-group>
        </b-form-group>
        <b-row>
          <b-col md="1">
            <b-button type="submit" variant="primary">Accept</b-button>
          </b-col>
          <b-col md="1">
            <b-button @click="onCancel" variant="danger">Cancel</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        phone: null,
        email: "",
        address: {
          street: "",
          no: null,
          floor: "",
          side: "",
          city: "",
          zipCode: "",
          state: "",
          country: ""
        },
        profilePictureUrl: "https://api.adorable.io/avatars/285/q.png",
        userName: "",
        passWord: "",
        primaryRole: null
      },
      roleTypes: [
        { value: 0, text: "Booker" },
        { value: 1, text: "Client" },
        { value: 2, text: "Substitute" }
      ]
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store
        .dispatch("users/createUser", this.user)
        .then(() => {
          this.$router.push("/temps");
        })
        .catch(e => {});
    },
    onCancel() {
      this.$router.push("/temps");
    },
    reset() {
      this.showCollapse = false;
      this.user.firstName = "";
      this.user.firstName = "";
      this.user.lastName = "";
      this.user.phone = null;
      this.user.email = "";
      this.user.address.street = "";
      this.user.address.no = null;
      this.user.address.floor = "";
      this.user.address.side = "";
      this.user.address.city = "";
      this.user.address.zipCode = "";
      this.user.address.state = "";
      this.user.address.country = "";
      this.user.profilePictureUrl =
        "https =//api.adorable.io/avatars/285/q.png";
      this.user.userName = "";
      this.user.passWord = "";
      this.user.primaryRole = null;
    }
  }
};
</script>

<style>
</style>
