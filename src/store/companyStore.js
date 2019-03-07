import api from "../utils/networkUtils";

function initialState() {
  return {
    companies: []
  };
}

export default {
  namespaced: true,
  state: {
    companies: []
  },
  mutations: {
    set(state, companies) {
      state.companies = companies;
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
      api.get("/api/company").then(response => {
        context.commit("set", response.data);
      });
    },
    reset({ commit }) {
      commit("clear");
    }
  }
};
