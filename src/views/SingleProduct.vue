<template>
    <b-container class="bv-example-row">
        <b-row v-if="singleProduct.name">
            <b-col md="3"><b-img width="150" height="100" src="https://cdn2.gsmarena.com/vv/pics/oneplus/oneplus-6-amber-red.jpg" fluid alt="Responsive image"></b-img></b-col>
            <b-col md="3">
                <h4>{{ singleProduct.name }}</h4>
                <span class="info">${{ singleProduct.unit_price }}</span> <br />
                <span class="info">Catergory: {{ singleProduct.type }}</span> <br />
                <button :disabled="isAddToCartEnable(singleProduct.id)" @click="addToCart(singleProduct)">Add To Cart</button>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapState } from 'vuex'
export default{
    computed:{
        ...mapState('products',['singleProduct']),
        ...mapState('cart',['cartProducts']),
        isAddToCartEnable: function(){
            return(id) => {
                const product = this.cartProducts.find(product => product.id === id)
                return product ? true : false
            }
        }
    },
    created() {
        this.$store.dispatch('products/fetchSingleProduct', this.$route.params.id)
    },
    methods: {
        addToCart(product) {
            this.$store.dispatch('cart/addProductToCart', product)
        }
    }
}
</script>
<style>
.info {
    width: 100%;
}
</style>