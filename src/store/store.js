import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

import router from "../router";
import tempStore from "./tempStore";
import accountStore from "./accountStore";

//##################################
// For when auth is actually needed.
//##################################

// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   function(error) {
//     if (error.response.status === 401) {
//       localStorage.removeItem("access_token");
//       router.push("/login");
//     }
//     return Promise.reject(error.response);
//   }
// );

export default new Vuex.Store({
  state: {
    temps: [],
    companies: [],
    departments: [],
    workPeriods: []
  },
  mutations: {
    setTemps(state, temps) {
      state.temps = temps;
    },
    setCompanies(state, companies) {
      state.companies = companies;
    },
    setDepartments(state, departments) {
      state.departments = departments;
    },
    setWorkPeriods(state, workPeriods) {
      state.workPeriods = workPeriods;
    }
  },
  modules: {
    account: accountStore,
    temps: tempStore
  },
  mounted() {
    console.log("Heeeeeey");
  }
});
