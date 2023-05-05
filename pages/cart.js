import Wrapper from '@/components/Wrapper'
import React from 'react'

const Cart = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
         <div className="text-center max-w-3xl mx-auto mt-8 md:mt-0">
            <div className='text-3xl md:text-4xl mb-5 font-semibold leading-tight'>
                shopping cart
            </div>
        </div>
        <div>
            left
        </div>
        <div>right</div>
        </Wrapper> 
    </div>
  )
}

export default Cart
