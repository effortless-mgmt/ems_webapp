import api from "../utils/networkUtils";
import { reject } from "q";

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
    setUsers(state, users) {
      state.users = users;
    },
    clear(state) {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    },
    setUser(state, user) {
      var oldUser = state.temps.find(u => u.userName === user.userName);
      var index = state.temps.indexOf(oldUser);
      console.log("Index: " + index);
      state.temps[index] = user;
      console.log(state.temps);
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
      api.put("/api/user/" + user.userName, user).then(response => {
        context.dispatch("refresh");
      });
    },
    createUser(context, user) {
      return new Promise((resolve, reject) => {
        api
          .post("/api/user", user)
          .then(response => {
            // Should be one method, or stores just be split
            context.dispatch("getTemps");
            context.dispatch("refresh");
            return resolve(response);
          })
          .catch(e => {
            console.log(e.response.data);
            if (e.response.status === 409) {
              return reject(e);
            }
          });
      });
    },
    refresh(context) {
      api.get("/api/user").then(response => {
        context.commit("setUsers", response.data);
      });
    }
  }
};
