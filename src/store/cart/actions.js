import { addToCartAPI, removeCartAPI, getCartAPI } from '../../api/cart'
export default {
    addProductToCart({ commit }, product) {
        addToCartAPI({product_id:product.id}).then(response => {
            const { status, data } = response
            if(status === 200 && data.success) {
                commit('addCartProduct', product)
            }
            
        }).catch(() => {})
    },
    removeProdctToCart({ commit, state }, index) {
        let product = state.cartProducts[index]
        removeCartAPI({product_id:product.id}).then(response => {
            const { status, data } = response
            if(status === 200 && data.success) {
                commit('removeProductsToCart', index)
            }
            
        }).catch(() => {})
    },
    getCart({commit}) {
        getCartAPI().then(response => {
            const { status, data } = response
            if(status === 200) {
                commit('setCartProducst', data.data)
            }
        }).catch(() => {})
    }
}