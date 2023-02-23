import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className='w-48 bg-white shadow-lg mt-8 rounded-md p-4 '>
        <img src={product.image} className="h-48"/>
        <h2 className='text-xs'>{product.title}</h2>
        <div className='flex items-center justify-between'>
            <p>Rs {product.price}</p>
            <p className='text-xs'>Add To Cart</p>
        </div>
    </div>
  )
}
