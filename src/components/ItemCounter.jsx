import React, { useState, useContext } from 'react';
import {CartContext} from "./CartContext"

const ItemCounter = ({ stock = 10, id, name, image }) => {

    const value =useContext(CartContext);
    console.log(value)

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

        console.log(cardToCart)
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
