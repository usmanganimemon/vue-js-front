import apiConfig from './siteConfig'
export const loginAPI = (data) => {
    return apiConfig.post('/login', data)
}
export const logoutAPI = () => {
    return apiConfig.get('/logout')
}