import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { AlignRight} from 'lucide-react';
function ProductItem({product}) {
  return (
<Link className='shadow-lg inline-block hover:shadow-emerald-200 hover:shadow-2xl border-teal-400 hover:border transition-all ease-in duration-700 rounded-[5px] p-3 overflow-hidden hover:cursor-pointer' href={`/product-details/${product?.id}`} >
   <Image  
   src={product?.attributes?.banner?.data?.attributes?.url}
   alt='Banner Item Card'
   width={400}
   height={350}
   className='rounded-t-lg object-cover h-[170px] w-full  transform  transition-all  ease-in duration-[500ms] hover:scale-[1.2]'
   />

        <div className='flex  justify-around items-center  p-4'>
            <div className=''>
            <h2 className='text-[14px] font-medium line-clamp-3'>{product?.attributes?.Title}</h2>
            <h2 className='text-[10px] text-gray-400 font-medium flex gap-3 items-center hover:text-[rgba(0,255,0)]'>  <AlignRight className='w-6 h-7 text-[rgba(0,255,0)]' />{product?.attributes?.category}</h2>
            </div>
                      <h2 className='text-[rgba(0,255,0)]'>{product?.attributes?.price} 
                      <small className='text-red-600 text-lg font-light size-[20px]'>$</small>
                      </h2>
        </div>
</Link>
  )
}

export default ProductItem
