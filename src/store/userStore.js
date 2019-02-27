import api from "../utils/networkUtils";

function initialState() {
  return {
    users: [],
    temps: []
  };
}

export default {
  namespaced: true,
  state: {
    users: [],
    temps: []
  },
  mutations: {
    setTemps(state, temps) {
      state.temps = temps;
    },
    clear(state) {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    },
    setUser(state, user) {
      state.users.find(u => u.userName === user.userName) = user;
    }
  },
  getters: {
    getUserByUserName: state => userName => {
      return state.temps.find(u => u.userName === userName);
    }
  },
  actions: {
    getTemps(context) {
      api
        .get("/api/user?primaryRole=2")
        .then(response => {
          context.commit("setTemps", response.data);
        })
        .catch(() => {});
    },
    updateUser(context, user) {
      api.put("/api/user/" + user.username, user).then(response => {
        context.commit("setUser", user);
      })
    }
  }
};
