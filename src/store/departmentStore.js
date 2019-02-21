import { api } from "../utils/networkUtils";
import { base_url } from "../utils/networkUtils";

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
    }
  },
  actions: {
    refresh(context) {
      context.commit("setLoading", true);
      api
        .get(base_url + "/api/department")
        .then(response => {
          context.commit("set", response.data);
          context.commit("setLoading", false);
        })
        .catch(e => {});
    }
  }
};
