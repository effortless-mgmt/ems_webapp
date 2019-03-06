import api from "../utils/networkUtils";

function initialState() {
  return {
    smsRecipients: [],
    emailRecipients: []
  };
}

export default {
  namespaced: true,
  state: {
    smsRecipients: [],
    emailRecipients: [],
    message: ""
  },
  mutations: {
    setSmsRecipients(state, recips) {
      state.smsRecipients = recips;
    },
    setMessage(state, message) {
      state.message = message;
    },
    setEmailRecipients(state, recips) {
      state.emailRecipients = recips;
    },
    clear(state) {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    }
  },
  actions: {
    storeSmsRecipients(context, recips) {
      context.commit("clear");
      context.commit("setSmsRecipients", recips);
      console.log(recips);
    },
    storeEmailRecipients(context, recips) {
      context.commit("clear");
      context.commit("setEmailRecipients", recips);
    },
    sendMessage(context, message) {
      context.commit("setMessage", message);
    },
    reset(context) {
      context.commit("clear");
    }
  }
};
