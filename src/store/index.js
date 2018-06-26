import Vue from 'vue';
import Vuex from 'vuex';

import localboard from '@/store/modules/localboard';
import game from '@/store/modules/game';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    localboard,
    game,
  },
  actions: {
    resetAll({ commit }) {
      commit('localboard/resetState');
      commit('game/resetState');
    },
  },
});
