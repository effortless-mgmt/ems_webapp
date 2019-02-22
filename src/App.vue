<template>
  <div id="app">
    <navbar/>
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

import NavBar from "./components/TheNavBar.vue";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "app",
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
}
h1 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}
.router-link-active {
  font-weight: 600;
}
</style>
