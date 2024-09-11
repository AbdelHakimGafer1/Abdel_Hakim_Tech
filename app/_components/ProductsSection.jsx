'use client'
import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import ProductsApis from '../_utils/ProductsApis'

function ProductsSection() {
    const [productsList,setproductsList]=useState([]);
    useEffect(()=>{
        getLatestProducts_();
    }
    ,[])
    const getLatestProducts_=()=>{
        ProductsApis.getLatestProducts().then(res=>{
            console.log(res.data);
            setproductsList(res.data.data);
        })
    }
  return (
    <div id='prosec' className='md:px-20 pl-[-0.5rem] pr-[3rem] gap-6 '>
      <ProductsList productsList={productsList}/>
    </div>
  )
}

export default ProductsSection
