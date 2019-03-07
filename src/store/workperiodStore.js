import api from "../utils/networkUtils";

function initialState() {
  return {
    workPeriods: [],
    todaysWorkPeriods: []
  };
}

export default {
  namespaced: true,
  state: {
    workPeriods: [],
    todaysWorkPeriods: []
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
    },
    setToday(state, workPeriods) {
      state.todaysWorkPeriods = workPeriods;
    }
  },
  getters: {
    getById: state => id => {
      return state.workPeriods.find(wp => wp.id === id);
    },
    getAppointmentsById: state => id => {
      return state.workPeriods.find(wp => wp.id === id).appointments;
    },
    getByDepartmentId: state => id => {
      return state.workPeriods.filter(wp => wp.department.id == id);
    }
  },
  actions: {
    refresh(context) {
      api
        .get("/api/workperiod")
        .then(response => {
          context.commit("set", response.data);
        })
        .catch(() => {});
    },
    getTodaysWorkPeriods(context) {
      api
        .get("/api/workperiod?today=true")
        .then(response => {
          context.commit("setToday", response.data);
        })
        .catch(() => {});
    }
  }
};
