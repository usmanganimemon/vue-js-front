import { productsAPI, getSingleProdcutAPI } from '../../api/products'
export default {
    setProducts({commit}, products) {
        commit('setProducts', products)
    },
    fetchProducts({commit, dispatch}) {
        dispatch('setLoading', true, { root: true })
        productsAPI().then(response => {
            dispatch('setLoading', false, { root: true })
            const { status, data } = response
            if(status === 200) {
                commit('setProducts', data.data)
            }
        }).catch(() => {
            commit('setProducts', [])
            dispatch('setLoading', false, { root: true })
        })
    },
    fetchSingleProduct({ commit, dispatch }, id) {
        dispatch('setLoading', true, { root: true })
        getSingleProdcutAPI({ product_code: id}).then(response => {
            dispatch('setLoading', false, { root: true })
            const { status, data } = response
            if(status === 200) {
                commit('setSingleProduct', data.data)
            }
        }).catch(() => {
            commit('setSingleProduct', {})
            dispatch('setLoading', false, { root: true })

        })
    }
}