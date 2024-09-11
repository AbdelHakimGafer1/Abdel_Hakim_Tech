'use client'
import React, { useContext } from 'react'
import { ShoppingCart } from 'lucide-react'
import { BadgeCheck ,AlertOctagon } from 'lucide-react'
import SekletonProducts from './SekletonProducts'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from '../../_utils/CartApis'
import { CartContext } from '../../_context/CartContext'


function ProductsInfo({product}) {
 const {user}=useUser()
 const router=useRouter();
const {cart,setcart}=useContext(CartContext);
  const handelAddtoCart=()=>{
     if (!user) {
      router.push('/sign-in');
     }else{
      const data={
        data:{
          username:user.fullName,
          email:user.primaryEmailAddress.emailAddress,
          products:[product?.id]
        }
      }
        CartApis.addToCart(data).then(res=>{
          console.log(`Cart Created Successfully..${res?.data?.data}`);
          setcart(oldCart=>[
            ...oldCart,
            {
              id:res?.data?.data?.id,
              product
            }
          ])
        }).catch(error=>{
          console.log(error)
        })
     }
  }
  return (
    <div>
    {product?.id?
        <div>
        <h2 className='text-[20px]'>{product?.attributes?.Title}</h2>
        <h2 className='text-[rgba(0,255,0)] text-[13px]  '>{product?.attributes?.category}</h2>
            <h2 className='text-[#afafaf] text-[15px] mt-8'>
            {product?.attributes?.description[0]?.children[0]?.text}
            </h2>
            <h2 className='text-fuchsia-600 text-[13px] flex gap-2 mt-2 px-1 py-1 items-center'>
            {product?.attributes?.instantDelivery ? 
            <BadgeCheck className='text-green-400 h-7 w-8'  />
            :<AlertOctagon className='text-red-600 h-7 w-8'/>
         }
            Eligible For Instant Delivery</h2>
                <h2 className='mt-3 text-[#2cff6b] text-[32px]'>$ {product?.attributes?.price}</h2>

  <button onClick={()=>handelAddtoCart()}  className=' cursor-pointer  mt-3 py-3 px-3 hover:bg-black hover:border hover:text-cyan-400 border-red-800  flex gap-3 bg-slate-700  rounded-lg animation duration-1000 text-fuchsia-600'>
<ShoppingCart />   Add To Cart 
  </button>
        </div>
        
        :<SekletonProducts/>}
 
    
    </div>
  )
}

export default ProductsInfo
