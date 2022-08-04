import axios from 'axios'
import store from '../store'
import router from '../router'
let intance = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL,
    timeout: 500000
})
intance.interceptors.request.use(function (config) {
    const { token } = store.state.userModule
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, function (err) {
    return Promise.reject(err)
  })
  intance.interceptors.response.use((response) => {
    return response
  }, (error) => {  
    if (error.response.status === 401) {
      store.dispatch('resetState')
      router.push('/')
    }
  })
export default intance