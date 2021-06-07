import Vue from 'vue';
import Vuex from 'Vuex';
import auth from './modules/auth.js'
import config from './modules/config.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    config,
  }
});
