import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    starredRepositories: null,
    repositories: null,
    username: null,
    user: null,
  },
  mutations: {
    SET_STARRED_REPOSITORIES: (state, payload) => {
      state.starredRepositories = payload;
    },
    SET_REPOSITORIES: (state, payload) => {
      state.repositories = payload;
    },
    SET_USERNAME: (state, payload) => {
      state.username = payload;
    },
    SET_USER: (state, payload) => {
      state.user = payload;
    },
  },
  actions: {
    setStarredRepositories: (context, payload) => context.commit('SET_STARRED_REPOSITORIES', payload),
    setRepositories: (context, payload) => context.commit('SET_REPOSITORIES', payload),
    setUsername: (context, payload) => context.commit('SET_USERNAME', payload),
    setUser: (context, payload) => context.commit('SET_USER', payload),
  },
  getters: {
    getStarredRepositories: (state) => state.starredRepositories,
    getRepositories: (state) => state.repositories,
    getUsername: (state) => state.username,
    getUser: (state) => state.user,
  },
});
