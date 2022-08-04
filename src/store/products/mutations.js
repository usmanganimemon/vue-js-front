export default {
    setProducts(state, products) {
        state.list = products
    },
    setSingleProduct(state, singleProduct) {
        state.singleProduct = singleProduct
    },
    reset(state) {
        state.list = []
        state.singleProduct = {}
    }
}