import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

import router from "../router";
import tempStore from "./tempStore";

const axiosInstance = axios.create();
axios.interceptors.request.use(config => {
  config.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("access_token");
  return config;
});

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
    axios: axios,
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
    temps: tempStore
  },
  mounted() {
    console.log("Heeeeeey");
  }
});
