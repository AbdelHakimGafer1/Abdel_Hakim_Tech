import React from 'react'
import Image from 'next/image'
function ProductsBanners({product}) {
  return (
    <div>
    {product?.attributes?.banner?.data?.attributes?.url? <Image
        alt='This is Product Details Banners'
        src={product?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={400}
        className='rounded-lg  duration-[3000ms] '
        />:<div className='w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse'> </div>
        }
    
    </div>
  )
}

export default ProductsBanners
