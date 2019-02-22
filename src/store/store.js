import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import tempStore from "./tempStore";
import accountStore from "./accountStore";
import departmentStore from "./departmentStore";
import workperiodStore from "./workperiodStore";

export default new Vuex.Store({
  namespaced: true,
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
    temps: tempStore,
    departments: departmentStore,
    workPeriods: workperiodStore
  }
});
