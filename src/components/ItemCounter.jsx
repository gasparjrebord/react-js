import React, { useState } from 'react';

const ItemCounter = ({ stock = 10, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const plus = () => {
        quantity < stock && setQuantity(quantity + 1)
    };
    const minus = () => {
        quantity > 1 && setQuantity(quantity - 1)
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
