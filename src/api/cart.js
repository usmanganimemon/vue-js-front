import siteConfig from './siteConfig'
export const addToCartAPI = (product) => {
    return siteConfig.post('/add-cart', product)
}
export const removeCartAPI = (product) => {
    return siteConfig.post('/remove-cart', product)
}
export const getCartAPI = () =>{
    return siteConfig.get('/cart')
}