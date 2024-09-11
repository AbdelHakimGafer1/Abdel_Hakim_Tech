
const { default: axiosClint } = require("./AxiosClint");

const getLatestProducts =()=>axiosClint.get('/Products?populate=*');
const getProductById=(id)=>axiosClint.get(`/products/${id}?populate=*`);
const getSmilerProduct=(category)=>axiosClint.get(`/products?filters[category][$eq]=${category}&populate=*`);


export default {
   getLatestProducts,
   getProductById,
   getSmilerProduct
}