import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

  async function getAllProducts(){
    let res = await fetch(apiUrl);
    let data = await res.json();
    setProducts(data)
    setLoading(false)
  }

  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <div className=' container mx-auto flex flex-wrap gap-8 justify-around'>
      {loading ? "Loading...": products.map((product)=>{
        return(
         
          <ProductCard  key={product.id} product={product}/>
    
        )
      })}

    </div>
  )
}
