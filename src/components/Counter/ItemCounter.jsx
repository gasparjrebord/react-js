import React, { useState, useContext } from 'react';
import {CartContext} from "../Context/CartContext"

const ItemCounter = ({ card }) => {
    const cartContext = useContext(CartContext);
    
    const [quantity, setQuantity] = useState(1);

    const plus = () => {
        quantity < card.stock && setQuantity(quantity + 1)
    };
    const minus = () => {
        quantity > 1 && setQuantity(quantity - 1)
    };

    const addToCart = () => {
        
        cartContext.addToCart(card,quantity);
    };

    return (
        <div className='itemCounterContainer'>
            <div className='itemCounter'>
                <button className='btn' onClick={minus}>-</button>
                <span>{quantity}</span>
                <button className='btn' onClick={plus}>+</button>
            </div>
            <button className='btn' onClick={addToCart}>Add to cart</button>
        </div>
    );
};
export default ItemCounter;
