import Vue from 'vue';
import Vuex from 'vuex';

import localboard from '@/store/modules/localboard.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    localboard,
  }
});
