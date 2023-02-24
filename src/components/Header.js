import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function Header() {

    const storeData = useContext(AppContext);

    let apiUrl = "https://fakestoreapi.com/products/categories";
    const [categories,setCategories] = useState([])
    async function getAllCategories(){
        let res = await fetch(apiUrl);
        let data = await res.json();
        setCategories(data);
    }
   useEffect(()=>{
        getAllCategories()
        console.log("Store data is :",storeData)
        storeData.consoleLog()
   },[])
    
  return (
    <div className='flex p-4 h-8 items-center text-white bg-blue-700 justify-between'>
        <Link to="/"><h1>{storeData.storeName}</h1></Link>
        <nav className='flex gap-5 text-xs'>
           {categories.map((category)=>{
            return(
                <Link to={`/category/${category}`}><ul className='capitalize'>{category}</ul></Link>
            )
           })}
        </nav>

       <Link to="/cart"><h3>Cart</h3></Link> 
    </div>
  )
}
