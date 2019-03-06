<template>
  <div id="app">
    <navbar v-if="isLoggedIn"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import NavBar from "./components/navbar/TheNavBar";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "app",
  computed: {
    isLoggedIn() {
      return this.$store.getters["account/isLoggedIn"];
    }
  },
  components: {
    navbar: NavBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 60px;
}
h1 {
  margin-top: 40px;
  margin-bottom: 20px;
}
.router-link-active {
  color: white !important;
}
</style>
