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
                <button className='btnPlusMinus' onClick={minus}>-</button>
                <span>{counter}</span>
                <button className='btnPlusMinus' onClick={plus}>+</button>
            </div>
            <button className='btnAddToCart' onClick={addToCart}>Add to cart</button>
        </div>
    );
};
export default ItemCounter;
