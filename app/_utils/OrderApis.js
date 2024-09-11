
const  {default:axiosClint}=require('./AxiosClint')
const createOrder=(data)=>axiosClint.post('/orders',data);


export  default{
createOrder
}