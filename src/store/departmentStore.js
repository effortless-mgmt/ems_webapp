import { api } from "../utils/networkUtils";
import { base_url } from "../utils/networkUtils";

function initialState() {
  return {
    departments: [],
    isLoading: false
  };
}

export default {
  namespaced: true,
  state: {
    departments: [],
    isLoading: true
  },
  mutations: {
    set(state, departments) {
      state.departments = departments;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    clear(state) {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    }
  },

  actions: {
    refresh(context) {
      context.commit("setLoading", true);
      api
        .get(base_url + "/api/department")
        .then(response => {
          context.commit("setLoading", false);
          context.commit("set", response.data);
        })
        .catch(() => {});
    }
  },
  mounted() {
    this.refresh();
  }
};
