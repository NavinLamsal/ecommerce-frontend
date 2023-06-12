import { getDiscountedPrice } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({data:{attributes:p, id}}) => {
  return (
    <Link href={`/products/${p.slug}`} className='transform overflow-hidden bg-white duration-200 hover:scale-105 drop-shadow-lg cursor-pointer '>
        <Image
        width={500}
        height={500}
        src={p.thumbnail.data[0].attributes.url}
        alt={p.name}
        /> 
        <div className='p-4 text-black'>
            <h2 className='text-lg font-medium'>{p.name}</h2>
            <div className='flex items-center text-gray'>
                <p className='mr-2 text-lg font-semibold text-black'>Rs {p.price}</p>
                {p.original_price && (
                  <>
                  
                  <p className='text-base font-medium line-through'>Rs {p.original_price}</p>
                  <p className='ml-auto text-base font-medium text-red'>
                    {getDiscountedPrice(p.original_price, p.price)} % off
                    </p>
                  </>
                )}
            </div>
        </div>
    </Link>
  )
}

export default ProductCard
