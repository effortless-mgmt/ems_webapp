import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import userStore from "./userStore";
import accountStore from "./accountStore";
import departmentStore from "./departmentStore";
import workperiodStore from "./workperiodStore";

export default new Vuex.Store({
  namespaced: true,
  modules: {
    account: accountStore,
    users: userStore,
    departments: departmentStore,
    workPeriods: workperiodStore
  }
});
