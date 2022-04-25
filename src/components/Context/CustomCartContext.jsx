import React, { useState } from 'react'
import { CartContext } from "./CartContext";

const CustomCartContext = ({children}) => {
  const [productsInCart, setProductsInCart] = useState([]);

	const addToCart = (card, quantity) => {
		if (isInCart(card.id)) {

			const newProducts = [...productsInCart]

			const productIndex = newProducts.findIndex(product => product.card.id === card.id);
			//console.log(newProducts[productIndex]);
			newProducts[productIndex].quantity = newProducts[productIndex].quantity + quantity;
			setProductsInCart(newProducts);
		} else {
			const newProduct = {
				card,
				quantity
			}
			//console.log("New Product: ", newProduct)
			setProductsInCart([...productsInCart, newProduct]);
		}
	}
	const isInCart = (id) => {
		return productsInCart.some(product => product.card.id === id);
	}

	const removeItem = (id) => {
		const newProducts = productsInCart.filter(product => product.card.id !== id)
		setProductsInCart(newProducts)
	}
	const clear = ()=>{
        setProductsInCart([]);
    }
	const getTotalPrice = () => {
		const totalPrice = productsInCart.reduce((acc, obj) => acc + (obj.quantity * obj.card.price), 0)
		return totalPrice;
	}

	return ( <CartContext.Provider value = {
			{
				productsInCart,
				addToCart,
				removeItem,
				clear,
				getTotalPrice
			}
		} > {
			children
		} </CartContext.Provider>
	)
}
export default CustomCartContext;