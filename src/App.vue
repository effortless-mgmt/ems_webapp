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

import NavBar from "./components/NavBar.vue";
import Login from "./components/Login.vue";

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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
