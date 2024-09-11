
import React, { useContext, useState } from 'react'
import { CartContext } from '../_context/CartContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
function CartBody({setpresstoggel}) {
const router=useRouter();
const {cart,setcart}=useContext(CartContext)
const [presstoggel,setpresstoggel1]=useState(false)


  
  return (
    <div className='h-[300px] w-[300px] 
    z-10  border-[#ff0984] bg-gray-600 rounded-md border shadow-sm absolute mx-6 right-10 top-14 pl-0 pr-1 overflow-auto'>
   
  
  <div className="mt-4 space-y-6 border-[#ff0984]">
    <ul className="space-y-4 border-[#ff0984]">
    {cart?.map((item)=>(
      <Link href='/cart' onClick={()=>setpresstoggel(!presstoggel)}>
      
      <li 
      key={item?.id} className="flex items-center m-2 gap-4 border p- cursor-pointer  border-[#ff0984]">
        <img
          src={item?.product?.attributes?.banner?.data?.attributes?.url}
          alt=""
          className="size-16 rounded object-cover m-1 "
        />

        <div>
          <h3 className="text-sm text-[#1aff94]  line-clamp-1">{item?.product?.attributes?.Title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-[#ff0984] ">
            <div>
              <dt className="inline text-[12px] text-[#ff59ac] ">Category: </dt>
              <dd className="inline text-[#1aff94]  "> {item?.product?.attributes?.category}</dd>
            </div>

            <div>
              <dt className="inline text-[12px] text-[#ffa0d0] ">Price:</dt>
              <dd className="inline text-[#1aff94]  ">$ {item?.product?.attributes?.price}</dd>
            </div>
          </dl>
        </div>
      </li>
      </Link>
    ))}

    </ul>
<div/>
    <div className="space-y-4 text-center bg-gray-600">
      <Link onClick={()=>setpresstoggel(!presstoggel)}  
        href="/cart"
        className="block rounded border border-[#ff0984]  px-5 py-2 text-sm text-[#ff0984] transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart ({cart?.length})
      </Link>



      <Link onClick={()=>setpresstoggel(!presstoggel)} 
        href="http://localhost:3000/"
        className="inline-block text-sm text-[#ff0984] underline underline-offset-4 transition p-3 text-[14px] mb-10 hover:text-[rgba(0,255,0)]"
      >
        Continue shopping
      </Link>
    </div>
  </div>
</div>

  )

}

export default CartBody