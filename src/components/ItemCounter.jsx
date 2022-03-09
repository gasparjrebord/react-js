import React, { useState } from 'react';

const ItemCounter = () => {
    const [counter, setCounter] = useState(1);
    let stock = 5;

    const plus = () => {
        if (counter < stock) {
            //console.log('suma')
            setCounter(counter + 1)
        }
    };
    const minus = () => {
        if (counter > 1) {
            //console.log('resta')
            setCounter(counter - 1)
        }
    };

    const addToCart = () => {
        console.log(counter)
    };

    return (
        <div className='itemCounterContainer'>
            <div className='itemCounter'>
                <a className='btnPlusMinus' onClick={minus}>-</a>
                <span>{counter}</span>
                <a className='btnPlusMinus' onClick={plus}>+</a>
            </div>
            <a href='#' className='btnAddToCart' onClick={addToCart}>Add to cart</a>
        </div>
    );
};
export default ItemCounter;
