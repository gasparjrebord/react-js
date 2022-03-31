import React, { useState, useContext } from 'react';
import CartIcon from '../../assets/images/cart.png';
import { CartContext } from '../Context/CartContext';



const CartWidget = () => {
    const [show, setShow] = useState(false);
    const cartContext = useContext(CartContext);
    console.log("Products in cart: ", cartContext.productsInCart);
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

