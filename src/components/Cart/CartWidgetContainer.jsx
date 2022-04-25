import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import CartIcon from '../../assets/images/cart.png';
import CartWidget from './CartWidget';



const CartWidgetContainer = () => {
    const [show, setShow] = useState(false);
    const cartContext = useContext(CartContext);
    const productsInCart = cartContext.productsInCart;
    console.log("Products in cart: ", productsInCart);
    return <>
        <img className='cartIcon' onClick={() => { setShow(!show); }} src={CartIcon} alt="cart-icon" />
        {show ? 
        <div className='cartWidgetContainer'>
            <div className='cartWidgetHeader'>
                <h3 className='cartWidgetTitle'>Articulos en el carrito:</h3>
            </div>
            <div className='cartWidgetItems'>
                {
                    productsInCart.map(product=>(
                        <CartWidget 
                            key={product.card.id} 
                            card={product.card} 
                            quantity={product.quantity}
                        />
                    ))
                }
            </div>
            <div className='cartWidgetBtn'>
                <Link to="/cart" className='btn btnCheckout'>Finalizar compra</Link>
            </div>
            
        </div> 
        : null}
    </>
};
export default CartWidgetContainer;

