import React, { useState, useContext } from 'react';
import {CartContext} from "../Context/CartContext"

const ItemCounter = ({ card }) => {
    const cartContext = useContext(CartContext);

    const [stock, setStock] = useState(10);
    
    const [quantity, setQuantity] = useState(1);

    const plus = () => {
        quantity < stock && setQuantity(quantity + 1)
    };
    const minus = () => {
        quantity > 1 && setQuantity(quantity - 1)
    };

    const addToCart = () => {
        
        setStock(stock - quantity);
        cartContext.addToCart(card,quantity);
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
