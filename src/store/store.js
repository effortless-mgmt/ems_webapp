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
  state: {
    errors: []
  },
  plugins: [createPersistedState()],
  modules: {
    account: accountStore,
    users: userStore,
    departments: departmentStore,
    workPeriods: workperiodStore
  },
  mutations: {
    setErrors(state, errors) {
      if (state.errors) {
        state.errors.push(errors);
      } else {
        state.errors = [errors];
      }
    },
    clearErrors(state) {
      state.errors = null;
    }
  },
  getters: {
    getErrors: state => {
      return state.errors;
    }
  },
  actions: {
    addError(error) {
      setErrors(error);
    },
    clearAll({ commit }) {
      console.log("Resetting all states.");
      commit("departments/clear");
      commit("users/clear");
      commit("workPeriods/clear");
      commit("account/clear");
      commit("clearErrors");
    }
  }
});
