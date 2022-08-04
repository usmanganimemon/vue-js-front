import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user/user.js'
import products from './products/products'
import cart from './cart/cart'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading
    },
    resetState(state) {
      state.loading = false
    }
  },
  actions: {
    setLoading({commit}, loadingVal) {
      commit('setLoading', loadingVal)
    },
    resetState({commit}) {
      commit('resetState')
      commit('userModule/reset')
      commit('products/reset')
      commit('cart/reset')
    }
  },
  modules: {
    userModule,
    products,
    cart
  },
  plugins: [createPersistedState({
    key: 'store',
    paths: ['userModule','cart']
  })]
})
