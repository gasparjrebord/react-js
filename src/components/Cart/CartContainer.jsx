import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Cart from './Cart';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../utils/firebase';


const CartContainer = () => {

    const cartContext = useContext(CartContext);
    const productsInCart = cartContext.productsInCart;

    const sendOrder = async(e)=>{
        e.preventDefault();
        const name = e.target[0].value;
        const phone = e.target[1].value;
        const email = e.target[2].value;
        const street = e.target[3].value;
        const streetnumber = e.target[4].value;
        const postalcode = e.target[5].value;

        const newOrder = {
            buyer:{
                name,
                phone,
                email,
                street,
                streetnumber,
                postalcode
            },
            products: productsInCart,
            total: cartContext.getTotalPrice(),
            date: Timestamp.fromDate(new Date())
        }
        console.log('new order', newOrder);

        const ordersCollection = collection(db, 'orders');
        const docRef = await addDoc(ordersCollection, newOrder);
        console.log('Orden de compra: ', docRef.id);
      }

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
           <div className='formCartContainer'>
                <form onSubmit={sendOrder}>
                    <h5>Ingrese sus datos personales</h5>
                    <br />
                    <p>Nombre y Apellido</p>
                    <input type="text" placeholder='Nombre y Apellido'/>
                    <p>Numero de Telefono</p>
                    <input type="text" placeholder='Numero de Telefono'/>
                    <p>Direccion de correo electronico</p>
                    <input type="email" placeholder='Email'/>
                    <h6>Direccion de facturacion y envio</h6>
                    <input type="text" placeholder='Calle'/>
                    <input type="text" placeholder='Numero de calle'/>
                    <input type="text" placeholder='Codigo Postal'/>
                    <button type='submit'>Finalizar compra</button>
                </form>
            </div>

        </div> 
   
    </>
};
export default CartContainer;

