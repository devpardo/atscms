import Vue from 'vue'
import Vuex from 'vuex'
import { reject } from 'async'
import { _ } from 'core-js'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : localStorage.getItem('accessToken') || null,
    userid : localStorage.getItem('user') || null,
    error : {
      status : false,
      errorMessage : ''
    }
  },
  getters : {
    loggedIn(state) {
      return state.token !== null;
    },
    hasError(state) {
      return state.error;
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    hasError(state, val) {
      state.error.status = val.status;
      state.error.errorMessage = val.errorMessage;
    },
    destroyToken(state) {
      state.token = null;
    },
    removeUser(state) {
      state.userid = null;
    },
    storeUser(state) {
      state.userid = state;
    }
  },
  actions,
  modules: {
  }
})
