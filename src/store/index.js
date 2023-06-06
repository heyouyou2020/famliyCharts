import Vue from 'vue'
import Vuex from 'vuex'
// import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: {},
  },
  getters: {
    token: (state) => state.token,
  },
  mutations: {
    setToken: (state, data) => {
      state.token = data.token;
      window.localStorage.setItem('token', data.token);
    },
    setInfo: (state, data) => {
      state.userInfo = data;
    },
    loginOut: state => {
      state.token = '';
      state.userInfo = {};
      window.localStorage.removeItem('token');
    }
  },
  actions: {
    async login({commit}){
      commit('setToken', {token: '19950313'});
      commit('setInfo', {
        userName: '小没没',
        lever: '管理员',
        phone: '18351887995',
      });
    }
  },
  modules: {
  }
})
