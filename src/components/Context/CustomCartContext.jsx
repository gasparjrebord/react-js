import React, {  useState } from 'react'
import { CartContext } from "./CartContext";

const CustomCartContext = ({children}) => {
    const [productsInCart, setProductsInCart] = useState([]);

    const addToCart = (card, quantity) => {
      if (isInCart(card.id)) {

        const newProducts = [...productsInCart]

        const productIndex = newProducts.findIndex(product=>product.card.id === card.id);
        console.log(newProducts[productIndex]);
        newProducts[productIndex].quantity = newProducts[productIndex].quantity + quantity;
        console.log("producto actualizado", newProducts);
        setProductsInCart(newProducts);
      }else{
        const newProduct = {
        card,
        quantity
      }
      console.log("New Product: ", newProduct)
        setProductsInCart([...productsInCart, newProduct]);
      }
    }
    const isInCart = (id) =>{
      return productsInCart.some(product=>product.card.id === id);
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