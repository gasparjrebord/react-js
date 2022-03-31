import React, { useState, useContext } from 'react';
import {CartContext} from "../Context/CartContext"

const ItemCounter = ({ id, name, image }) => {
    const cartContext = useContext(CartContext);
    console.log("Cart Context: ", cartContext);

    const [stock, setStock] = useState(10);
    const [productsInCart, setProductsInCart] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const plus = () => {
        quantity < stock && setQuantity(quantity + 1)
    };
    const minus = () => {
        quantity > 1 && setQuantity(quantity - 1)
    };

    const addToCart = () => {
        const cardToCart = {
            id,
            name,
            image,
            quantity
        }
        console.log(cardToCart);
        
        setProductsInCart(quantity);
        setStock(stock - quantity);
        cartContext.addToCart(cardToCart);
    };

    return (
        <div className='itemCounterContainer'>
            <div className='itemCounter'>
                <button className='btnPlusMinus' onClick={minus}>-</button>
                <span>{quantity}</span>
                <button className='btnPlusMinus' onClick={plus}>+</button>
            </div>
            <button className='btnAddToCart' onClick={addToCart}>Add to cart</button>
        </div>
    );
};
export default ItemCounter;
