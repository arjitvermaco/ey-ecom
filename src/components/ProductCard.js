import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';

export default function ProductCard({product}) {

  const storeData = useContext(AppContext);

  return (
    <div className='w-48 bg-white shadow-lg mt-8 rounded-md p-4 '>
        <img src={product.image} className="h-48"/>
       <Link to={`/product/${product.id}`}> <h2 className='text-xs'>{product.title}</h2></Link>
        <div className='flex items-center justify-between'>
            <p>Rs {product.price}</p>
            <p className='text-xs' onClick={()=>{storeData.addProductToCart(product)}}>Add To Cart</p>
        </div>
    </div>
  )
}
