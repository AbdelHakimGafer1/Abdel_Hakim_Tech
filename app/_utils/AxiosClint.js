const {default:axios}=require('axios');
const apiKey=process.env.NEXT_PUBLIC_REST_API_KYE;
const apiURL='http://localhost:1337/api';
const axiosClint=axios.create({
  baseURL:apiURL,
  headers:{
    Authorization:`Bearer ${apiKey}`
  }  
})
export default axiosClint;