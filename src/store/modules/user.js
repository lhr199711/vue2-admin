import { UserLogin, Logout } from "@a/login";
import * as auth from "@u/auth";
const state = {
  token: "",
  //   roles: [],
  //   buttonPermission: [],
  //   isCollapse: JSON.parse(sessionStorage.getItem("isCollapse")) || false,
  //   to_ken: "",
  username: auth.getUserName() || "",
};

const getters = {
  //   isCollapse: (state) => state.isCollapse,
  //   roles: (state) => state.roles,
  //   buttonPermission: (state) => state.buttonPermission,
};

const mutations = {
  SET_TOKEN(state, value) {
    state.token = value;
  },
  SET_USERNAME(state, value) {
    state.username = value;
  },
};

const actions = {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      UserLogin(payload)
        .then((res) => {
          commit("SET_TOKEN", res.data.data.token);
          commit("SET_USERNAME", res.data.data.username);
          auth.setToKen(res.data.data.token);
          auth.setUserName(res.data.data.username);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      Logout().then((response) => {
        const data = response.data;
        auth.removeToken();
        auth.removeUserName();
        commit("SET_TOKEN", "");
        commit("SET_USERNAME", "");
        resolve(data);
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
