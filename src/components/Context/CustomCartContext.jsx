import React, {  useState } from 'react'
import { CartContext } from "./CartContext";

export const CustomCartContext = ({children}) => {
    const [productsInCart, setProductsInCart] = useState([]);

    const addToCart = (title, image, quantity)=>{
      const newProduct = {
        title,
        image, 
        quantity
      }
      console.log("New Product: ", newProduct)
        setProductsInCart([...productsInCart, newProduct])
    }

  return (
    <CartContext.Provider value={{productsInCart, addToCart}}>
        {children}
    </CartContext.Provider>
  )
}
