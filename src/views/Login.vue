<template>
    <b-container class="bv-example-row">
        <b-row>
                <b-col md="6" offset="3">
                    <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
                    <b-form @submit="onSubmit" @reset="onReset">
                        <b-form-group id="fieldset-horizontal">
                            <b-form-input v-model="loginForm.email" type="text" placeholder="Username" required></b-form-input>
                        </b-form-group>
                        <b-form-group id="fieldset-horizontal">
                            <b-form-input v-model="loginForm.password" type="password" placeholder="Password" required></b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Submit</b-button>&nbsp;&nbsp;
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-col>
    </b-row>
    </b-container>
</template>
<script>
import { loginAPI } from '../api/user'
export default {
    data() {
        return{
            loginForm: {
                email: '',
                password: ''
            },
            errorMessage: ''
        }
    },
    created() {
        this.$store.dispatch('userModule/setUserToken', '')
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            this.$store.dispatch('setLoading', true)
            loginAPI(this.loginForm).then(response => {
                this.$store.dispatch('setLoading', false)
                let { status, data } = response
                if(status === 200 && data.success) {
                    this.$store.dispatch('userModule/setUserToken', data.token)
                    this.$store.dispatch('cart/getCart')
                    this.$router.push('/products');
                } else {
                    this.errorMessage = data.message
                }
            }).catch(err =>{
                this.$store.dispatch('setLoading', false)
                console.log(err)
            })
        },
        onReset(evt) {
            evt.preventDefault()
            this.loginForm = {
                email: '',
                password: ''
            }
        }
    }
}
</script>
<style>
.bv-example-row {
    padding-top: 20px;
}
.error {
    color: red;
}
</style>