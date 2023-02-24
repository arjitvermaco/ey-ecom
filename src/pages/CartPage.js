import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import ProductCardCart from '../components/ProductCardCart';

export default function CartPage() {
  const storeData = useContext(AppContext);

  return (
    <div>
      {storeData.cart.length <= 0 ? "No Products in cart":
        storeData.cart.map((product)=>{
          return(
            <>
            <ProductCardCart product={product}/>
            </>
          )
        })
      }
    </div>
  )
}
