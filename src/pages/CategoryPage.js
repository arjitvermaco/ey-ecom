import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {

  let {id} = useParams();
  const [products,setProducts] = useState([])
  let apiUrl = `https://fakestoreapi.com/products/category/${id}`;
  const [loading,setLoading] = useState(true);

  async function getProducts(){
    let res = await fetch(apiUrl);
    let data = await res.json();
    setProducts(data)
    setLoading(false)
  }

  useEffect(()=>{
    getProducts();
    setLoading(true)
  },[id])

  return (
    <div className='flex flex-wrap justify-around'>

        {loading? "loading...": products.map((product)=>{
            return(
            <ProductCard product={product}/>
            )
        })}

    </div>
  )
}
