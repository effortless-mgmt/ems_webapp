import { api } from "../utils/networkUtils";
import { base_url } from "../utils/networkUtils";

export default {
  namespaced: true,
  state: {
    workPeriods: []
  },
  mutations: {
    set(state, workPeriods) {
      state.workPeriods = workPeriods;
    }
  },
  actions: {
    refresh(context) {
      api
        .get(base_url + "/api/workperiod")
        .then(response => {
          context.commit("set", response.data);
        })
        .catch(e => {});
    }
  }
};
