import { api } from "../utils/networkUtils";
import { base_url } from "../utils/networkUtils";

function initialState() {
  return {
    workPeriods: []
  };
}

export default {
  namespaced: true,
  state: {
    workPeriods: []
  },
  mutations: {
    set(state, workPeriods) {
      state.workPeriods = workPeriods;
    },
    clear(state) {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    }
  },
  getters: {
    getById: state => id => {
      return state.workPeriods.find(wp => wp.id === id);
    },
    getAppointmentsById: state => id => {
      return state.workPeriods.find(wp => (wp.id = id)).appointments;
    }
  },
  actions: {
    refresh(context) {
      api
        .get(base_url + "/api/workperiod")
        .then(response => {
          context.commit("set", response.data);
        })
        .catch(() => {});
    }
  }
};
