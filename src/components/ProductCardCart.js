import React from 'react'

export default function ProductCardCart({product}) {
  return (
    <div className='max-w-3xl mt-14 mx-auto gap-16 flex items-center h-48 shadow-lg p-6'>
        <div className=''>
            <img src={product.image} className='w-20'/>
        </div>
        <div>
            <h4 className='text-2xl'>{product.title}</h4>
          
        </div>
    </div>
  )
}
