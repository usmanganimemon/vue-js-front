<template>
  <div id="app">
    <b-container class="bv-example-row">
      <div v-if="isCartandLogoutEnable" class="cart-wrap"><b-link :href="`/cart`">Cart {{ cartCount }}</b-link> <br />
        <b-link :href="`/products`">Products</b-link> <br />
        <a  @click="logout" class="logout_link">Logout</a> <br />
      </div>
      <div style="margin-top: 20px">
        <spinner size="large" v-if="$store.state.loading"></spinner>
      </div>
    </b-container>
    <router-view/>
  </div>
</template>
<script>
import { logoutAPI } from './api/user'
import { mapState } from 'vuex'
export default{
  computed: {
    cartCount: function() {
      return this.$store.state.cart.cartProducts.length > 0 ? 
      this.$store.state.cart.cartProducts.length : ''
    },
    isCartandLogoutEnable: function() {
      return this.$route.name !== 'Home' && this.token
    },
    ...mapState('userModule',['token'])

  },
  methods:{
    logout() {
      logoutAPI().then(response => {
        const { status, data } = response
        if(status === 200 && data.success) {
          this.$router.push('/');
          this.$store.dispatch('resetState')
        }
      }).catch(() => {

      })
    }
  }
}
</script>
<style>
.cart-wrap {
  float: right;
}
.logout_link {
  color: #007bff !important;
  cursor: pointer;
}
</style>
