import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Cart from './Cart';



const CartContainer = () => {

    const cartContext = useContext(CartContext);
    const productsInCart = cartContext.productsInCart;

    return <>
        <div className='cartContainer'>
            <div className='cartList'>
            <div className='cartHeader'>
                <h3 className='cartTitle'>Articulos en el carrito:</h3>
            </div>
            
                {
                    productsInCart.map(product=>(
                        <Cart 
                            key={product.card.id} 
                            card={product.card} 
                            quantity={product.quantity}
                        />
                    ))
                }
            </div>
           

        </div> 
   
    </>
};
export default CartContainer;

