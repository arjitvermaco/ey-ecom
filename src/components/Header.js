import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    let apiUrl = "https://fakestoreapi.com/products/categories";
    const [categories,setCategories] = useState([])
    async function getAllCategories(){
        let res = await fetch(apiUrl);
        let data = await res.json();
        setCategories(data);
    }
   useEffect(()=>{
        getAllCategories()
   },[])
    
  return (
    <div className='flex p-4 h-8 items-center text-white bg-blue-700 justify-between'>
        <Link to="/"><h1>My Store</h1></Link>

        <nav className='flex gap-5 text-xs'>
           {categories.map((category)=>{
            return(
                <Link to={`/category/${category}`}><ul className='capitalize'>{category}</ul></Link>
            )
           })}
        </nav>

        <h3>Cart</h3>
    </div>
  )
}
