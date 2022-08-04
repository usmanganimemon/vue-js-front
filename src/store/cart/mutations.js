export default {
    addCartProduct(state, product) {
        state.cartProducts.push(product)
    },
    removeProductsToCart(state, index) {
        state.cartProducts.splice(index, 1)
    },
    reset(state) {
        state.cartProducts = []
    },
    setCartProducst(state, products) {
        state.cartProducts = products
    }
}