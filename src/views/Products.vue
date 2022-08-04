<template>
    <b-container class="bv-example-row">
        <b-row v-for="(product, index) in list" :key="index">
            <b-col md="3"><b-img width="150" height="100" :src="product.image" fluid alt="Responsive image"></b-img></b-col>
            <b-col md="3"><b-link :href="`/product/${product.product_code}`">{{ product.name }}</b-link></b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapState } from 'vuex'
export default{
    computed:{
        ...mapState('products',['list'])
    },
    created() {
        this.$store.dispatch('products/fetchProducts')
    }
}
</script>
<style>
.product_title{
    cursor: pointer;
}
</style>