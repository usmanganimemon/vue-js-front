<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col md="10" offset="1"> 
                <b-table :fields="fields" :items="cartProducts">
                    <template v-slot:cell(unit_price)="data">
                        $ {{ data.item.unit_price }}
                    </template>
                    <template v-slot:cell(image)="data">
                        <b-img width="75" height="50" :src="data.item.image" fluid alt="Responsive image"></b-img>
                    </template>
                    <template v-slot:cell(action)="data" class="text-center">
                        <button @click="removeCart(data.item.id)">Delete</button>
                    </template>
                    <template v-if="cartProducts.length == 0" slot="top-row">
                        <td colspan="7" class="text-center">No Products in Cart, Please add from <b-link :href="`/products`">here</b-link> </td>
                    </template>
                </b-table>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapState } from 'vuex'
export default{
    data() {
        return {
            fields:[
                { key: 'image', label: ' Image' },
                { key: 'name', label: ' Name' },
                { key: 'type', label: ' Type' },
                { key: 'unit_price', label: ' Price' },
                { key: 'action', label: ' Action' },
            ]
        }
    },
    computed:{
        ...mapState('cart',['cartProducts'])
    },
    methods: {
        removeCart(id) {
            let index = this.cartProducts.findIndex(product => product.id === id)
            this.$store.dispatch('cart/removeProdctToCart', index)
        }
    }
}
</script>
<style>
.product_title{
    cursor: pointer;
}
</style>