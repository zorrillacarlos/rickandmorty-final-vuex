import Vue from "vue";
import Vuex from "vuex";
import characterStore from "./charactersRickAndMorty";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    charactersRAM: characterStore,
  },
});
