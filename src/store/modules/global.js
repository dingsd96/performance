const state = {
  loading: false,
  token: sessionStorage.getItem("accessToken"),
}

const getters = {
  s_loading(state) {
    return state.loading
  },
  s_token(state) {
    return state.token
  },
}

const mutations = {
  SET_LOADING: (state, flag) => {
    state.loading = flag
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

const actions = {
  setLoading({ commit }, flag) {
    commit("SET_LOADING", flag)
  },
  setToken({ commit }, token) {
    commit("SET_TOKEN", token)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
