import React, {  useState } from 'react'
import { Context } from "./Context";

export const CartContext = ({children}) => {
    const [products, setProducts] = useState([]);

    const addProduct = (newProduct)=>{
        setProducts([...products, newProduct])
    }

  return (
    <Context.Provider value={{products, addProduct}}>
        {children}
    </Context.Provider>
  )
}
