import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {

    const {id} = useParams();
    let apiUrl = `https://fakestoreapi.com/products/${id}`
    const [product,setProduct] = useState({});

    async function getProductData (){
      let res =await fetch(apiUrl);
      let data = await res.json();
      setProduct(data);
    }

    useEffect(()=>{
      getProductData()
    },[id])


  return (
    <div className='flex items-center  justify-between container mx-auto'>
      
        <div>
            <img src={product.image} className='w-96' />
        </div>

        <div>
          <h1 className='text-3xl'>{product.title}</h1>
          <p>{product.description}</p>
          <h3>Price : {product.price}</h3>
          <button className='bg-blue-600 px-4 py-2 rounded-md text-white'>Add To Cart</button>
        </div>

    </div>
  )
}
