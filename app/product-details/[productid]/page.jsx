'use client'
import React, { useEffect ,useState } from 'react'
import BredCrumps from '../../_components/BredCrumps';
import ProductsBanners from '../_components/ProductsBanners';
import ProductsInfo from '../_components/ProductsInfo';
import ProductsList from '../../_components/ProductsList';
import { usePathname } from 'next/navigation';
import ProductsApis from '../../_utils/ProductsApis';
function ProductDetails({params}) {

const [productDetails , setproductDetails]=useState({});
const [productDetailslist , setproductDetailslist]=useState([]);
const path=usePathname();
useEffect(()=>{
  getProductById_();
    },[params?.productid]);

const getProductById_=()=>{
    ProductsApis.getProductById(params?.productid).then(res=>{
        setproductDetails(res.data.data);
        getSmilerProduct(res.data.data);
        console.log(res.data.data);
    })
}
const getSmilerProduct=(product)=>{
     ProductsApis.getSmilerProduct(product?.attributes?.category).then(res=>{
              console.log(res);
              setproductDetailslist(res?.data?.data);
     })
}
  return (
    <div className='px-10 py-8 md:px-28'>
    <BredCrumps path={path}/>

            <div className='grid gap-6 sm:gap-1  mt-10  grid-cols-1 sm:grid-cols-2 justify-around mb-4'>
            <ProductsBanners product={productDetails}/>
            <ProductsInfo product={productDetails}/>
            </div>
        
        <div className='mt-3'>
               <h2 className='mt-28 mb-14 text-2xl text-center text-green-500'>Similar Products...</h2>
               <ProductsList productsList={productDetailslist}/>
        </div>
    </div>
  )
}

export default ProductDetails
