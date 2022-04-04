import React, {  useState } from 'react'
import { CartContext } from "./CartContext";

const CustomCartContext = ({children}) => {
    const [productsInCart, setProductsInCart] = useState([]);

    const addToCart = (card, quantity) => {
      const newProduct = {
        card,
        quantity
      }
      console.log("New Product: ", newProduct)
        setProductsInCart([...productsInCart, newProduct]);
    }
    const removeItem = (id) => {
      console.log("item id", id)
      const newProducts = productsInCart.filter(product=>product.card.id !== id)
      setProductsInCart(newProducts)
    }

  return (
    <CartContext.Provider value={{productsInCart, addToCart, removeItem}}>
        {children}
    </CartContext.Provider>
  )
}
export default CustomCartContext;