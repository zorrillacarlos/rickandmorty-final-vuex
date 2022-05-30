import Axios from "axios";

const characterStore = {
  namespaced: true,

  state: () => ({
    characters: [],
  }),
  getters: {},
  mutations: {
    loadCharacters(state, param) {
      state.characters = param.results;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      const response = await Axios.get("https://rickandmortyapi.com/api/character")
      commit("loadCharacters", response.data)
    },
  },
};

export default characterStore;
