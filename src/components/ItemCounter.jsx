import React from 'react';

const ItemCounter = ({ counter, setCounter }) => {

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
    return (
        <div className='itemCounter'>
            <button className='counterPlusMinus' onClick={minus}>-</button>
            <span>{counter}</span>
            <button className='counterPlusMinus' onClick={plus}>+</button>
        </div>
    )
};
export default ItemCounter;
