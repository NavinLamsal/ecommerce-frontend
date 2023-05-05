import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    <Link href='/product/productDetail' className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer '>
        <img className='w-full' src='/product-1.webp' alt='Product Image'/>
        <div className='p-4 text-black'>
            <h2 className='text-lg font-medium'>Product Name</h2>
            <div className='flex items-center text-gray'>
                <p className='mr-2 text-lg font-semibold text-black'>Rs 4200</p>
                <p className='text-base font-medium line-through'>Rs 6000</p>
                <p className='ml-auto text-base font-medium text-red'>30% off</p>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard
