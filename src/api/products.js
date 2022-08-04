import siteConfig from './siteConfig'
export const productsAPI = () => {
    return siteConfig.get('/products')
}
export const getSingleProdcutAPI = (data) => {
    return siteConfig.get('/single-prodct', { params: data })
}