<template>
  <div v-if="user">
    <b-container>
      <b-card
        bg-variant="light"
        :img-src="user.profilePictureUrl"
        img-alt="Image"
        img-height="320"
        img-left
        class="headerCard"
      >
        <b-row class>
          <b-col md="10">
            <h1>{{ user.firstName }} {{ user.lastName }}</h1>
          </b-col>
          <b-col md="1" align-self="center">
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
              <font-awesome-icon icon="phone"/>
              {{ phone }}
            </b-list-group-item>
            <b-list-group-item>
              <font-awesome-icon icon="envelope"/>
              {{ email }}
            </b-list-group-item>
            <b-list-group-item>
              <font-awesome-icon icon="address-card"/>
              {{ readableAddress }}
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-card>

      <div v-if="!isEditable">
        <b-card header="Experience">
          <div class="mt-3">
            <b-card-group deck v-for="i in 3" :key="i" style="margin: 10px auto;">
              <UserDepartmentCard v-for="i in 3" :key="i"></UserDepartmentCard>
            </b-card-group>
          </div>
        </b-card>
      </div>
      <b-form v-else class="editForm">
        <b-form-group label-cols="2" label="Contact" label-size="lg">
          <b-form-group label-cols="1" label="Phone:" label-for="phone-input">
            <b-input v-model="phone" id="phone-input" :placeholder="phone" :value="phone"></b-input>
          </b-form-group>
          <b-form-group label-cols="1" label="Email:" label-for="email-input">
            <b-input v-model="email" id="email-input" :placeholder="phone" :value="phone"></b-input>
          </b-form-group>
        </b-form-group>
        <b-form-group label-cols="2" label="Address" label-size="lg">
          <b-form-group label-cols="1" label="Street:" label-for="street">
            <b-input v-model="address.street" id="street" placeholder="Street"></b-input>
          </b-form-group>
          <b-form-group label-cols="1" label="No:" label-for="no">
            <b-input v-model="address.no" placeholder="Number" id="no" :value="address.no"></b-input>
          </b-form-group>
          <b-form-group label-cols="1" label="Floor:" label-for="floor">
            <b-input v-model="address.floor" placeholder="Floor" id="floor" :value="address.floor"></b-input>
          </b-form-group>
          <b-form-group label-cols="1" label="Side:" label-for="side">
            <b-input v-model="address.side" placeholder="Side" id="side" :value="address.side"></b-input>
          </b-form-group>
          <b-form-group label-cols="1" label="City:" label-for="city">
            <b-input v-model="address.city" placeholder="City" id="city" :value="address.city"></b-input>
          </b-form-group>
          <b-form-group label-cols="1" label="State:" label-for="state">
            <b-input v-model="address.state" placeholder="State" id="state" :value="address.state"></b-input>
          </b-form-group>
          <b-form-group label-cols="1" label="Zip:" label-for="zipCode">
            <b-input
              v-model="address.zipCode"
              placeholder="Zip Code"
              id="zipCode"
              :value="address.zipCode"
            ></b-input>
          </b-form-group>
          <b-form-group label-cols="1" label="Country:" label-for="country">
            <b-input
              v-model="address.country"
              placeholder="Country"
              id="country"
              :value="address.country"
            ></b-input>
          </b-form-group>
        </b-form-group>
      </b-form>
      <b-row v-if="isEditable">
        <b-col md="1" offset-md="10">
          <b-button @click="toggleEdit()" variant="light">Cancel</b-button>
        </b-col>
        <b-col md="1">
          <b-button @click="updateUser()" type="submit" variant="primary">Accept</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UserDepartmentCard from "./UserDepartmentCard";
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
      var temps = this.$store.state.users.temps;
      return temps.find(u => u.userName === this.userName);
    },
    readableAddress() {
      return (
        this.address.street +
        " " +
        this.address.no +
        ", " +
        this.address.zipCode +
        " " +
        this.address.city +
        ", " +
        this.address.country
      );
    },
    editedUser() {
      return {
        userName: this.username,
        phone: this.phone,
        email: this.email,
        address: this.address
      };
    }
  },
  methods: {
    toggleEdit() {
      if (!this.isEditable) {
        this.isEditable = true;
      } else this.isEditable = false;
    },
    updateUser() {
      console.log(this.editedUser);
      this.$store.dispatch("users/updateUser", this.editedUser);
      this.toggleEdit();
    }
  },
  mounted() {
    this.username = this.user.userName;
    this.password = this.user.password;
    this.phone = this.user.phone;
    this.email = this.user.email;

    if (this.user.address != null) {
      this.address = {
        street: this.user.address.street,
        no: this.user.address.no,
        floor: this.user.address.floor,
        side: this.user.address.side,
        city: this.user.address.city,
        state: this.user.address.state,
        zipCode: this.user.address.zipCode,
        country: this.user.address.country
      };
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
  },
  components: { UserDepartmentCard }
};
</script>

<style>
.profilePic {
  width: 20%;
}
.editButton {
  margin: auto;
}
.headerCard {
  margin-bottom: 20px;
}
</style>
