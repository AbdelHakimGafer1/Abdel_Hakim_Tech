const {default:axiosClint}=require('./AxiosClint');

const addToCart=(payload)=>axiosClint.post('/carts',payload);

const getCartitems=(email)=>axiosClint.get(`/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`)
const deleteCartitem=(id)=>axiosClint.delete(`/carts/${id}`);
export default {
    addToCart,
    getCartitems,
    deleteCartitem
}