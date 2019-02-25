import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import userStore from "./userStore";
import accountStore from "./accountStore";
import departmentStore from "./departmentStore";
import workperiodStore from "./workperiodStore";

export default new Vuex.Store({
  namespaced: true,
  plugins: [createPersistedState()],
  modules: {
    account: accountStore,
    users: userStore,
    departments: departmentStore,
    workPeriods: workperiodStore
  },
  actions: {
    clearAll({ commit }) {
      console.log("Resetting all states.");
      commit("departments/clear");
      commit("users/clear");
      commit("workPeriods/clear");
      commit("account/clear");
    }
  }
});
