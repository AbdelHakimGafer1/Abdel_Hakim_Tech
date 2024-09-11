'use client'
import React, { useContext, useState } from 'react'
import { CartContext } from '../_context/CartContext'
import CartApis from '../_utils/CartApis'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Cart() {
  let dis=3;
  let vat=5;
const router = useRouter();
  const {cart,setcart}=useContext(CartContext)
  const [presstoggel,setpresstoggel1]=useState(false)
const getTotalAmount=()=>{
    let total = 0;
    cart.forEach((item) => {
        total = total + Number(item?.product?.attributes?.price)
    })
    let tvd= (total+vat-dis).toFixed(2);
    

    // if (tvd<=0) {
    //   console.log(tvd)
    //  return tvd=tvd+1
    // }else{
    //   console.log(tvd)
    //   return Math.round(tvd * 100)
    // }
    return total;
}

const deleteCartitemlist=(id)=>{
     CartApis.deleteCartitem(id).then((res)=>{
        console.log(id,cart)
        if (res) setcart((oldCart)=>(oldCart.filter(item=>item?.id!==res?.data?.data?.id))) 
            console.log(id,cart)
     }).catch(error=>{
        console.log(error)
     })
}
  return (
    <div className=''>

<section className='bg-slate-900 '>
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl ">
    <header className="text-center">
      <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
    </header>

    <div className="mt-8">
      <ul className="space-y-4">
      {cart?.map(item=>(

          <li className="flex items-center gap-4">
            <img
              src={item?.product?.attributes?.banner?.data?.attributes?.url}
              alt=""
              className="size-16 rounded object-cover"
            />
  
            <div>
              <h3 className="text-sm m-2 text-[#ff0984]">{item?.product?.attributes?.Title}</h3>
  
              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline text-[#ad439c] text-[13px] p-2">Category :</dt>
                  <dd className="inline text-[11px] text-[#5fd386]">{item?.product?.attributes?.category}</dd>
                </div>

              </dl>
            </div>
  
            <div className="flex flex-1 items-center justify-end gap-2">
          <strong className='text-[rgba(0,255,0)]'> $ {item?.product?.attributes?.price}</strong>
  
              <button onClick={()=>deleteCartitemlist(item?.id)} className="text-gray-400 transition hover:text-red-600">
                <span className="sr-only">Remove item</span>
  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
      ))}


      </ul>

      <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
        <div className="w-screen max-w-lg space-y-4">
          <dl className="space-y-0.5 text-sm text-gray-700">

            <div className="flex justify-between">
              <dt className='text-[#63ff70]'>VAT</dt>
              <dd className='text-[#ff0482]'>$ {vat}</dd>
            </div>

            <div className="flex justify-between">
              <dt className='text-[#63ff70]'>Discount</dt>
              <dd className='text-[#ff0482]'>$ {dis}</dd>
            </div>

            <div className="flex justify-between !text-base font-medium">
              <dt className='text-[#63ff70]'>Total</dt>
              <dd className='text-[#ff0482]'>$ {(getTotalAmount()-dis+vat).toFixed(3)}</dd>
            </div>
          </dl>

          <div className="flex justify-end">
            <span
              className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="-ms-1 me-1.5 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>

              <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
            </span>
          </div>

          <div className="flex justify-around items-center">
            <button
              onClick={()=>router.push(`/checkout?amount=${getTotalAmount()}`)
              }
              className="block rounded bg-[#ff0482] px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              Checkout
              </button>
              </div>
              </div>
              </div>
              <h2 className='text-[#ff0482] text-[14px] mt-4 '>Note : All Items will be Vai an Email</h2>
    </div>
  </div>
</div>
</section>
    </div>
  )
}

export default Cart