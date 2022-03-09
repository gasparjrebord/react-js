import React, { useState } from 'react';
import CartIcon from '../assets/images/cart.png';



const CartWidget = () => {
    const [show, setShow] = useState(false);
    return <>
        <img className='cartIcon' onClick={() => { setShow(!show); }} src={CartIcon} alt="cart-icon" />
        {show ? <div className='itemsOnCart'>
            <div className='cartHeader'>
                <h3 className='cartTitle'>Articulos en el carrito:</h3>
            </div>
        </div> : null}
    </>
};
export default CartWidget;

