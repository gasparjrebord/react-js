import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Cart from './Cart';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import PopUp from '../PopUp/PopUp';


const CartContainer = () => {

    const cartContext = useContext(CartContext);
    const productsInCart = cartContext.productsInCart;
    const [popup, setPopup] = useState(false)
    const [order, setOrder] = useState({name: '', phone: '', email:'', street: '', streetnumber: '', postalcode: '',  total: cartContext.getTotalPrice()})

    const campos = [
        {title:"Nombre y Apellido", type:"text", inputName:"name"},
        {title:"Telefono",type:"text", inputName:"phone"},
        {title:"Email", type:"email", inputName:"email"},
        {title:"Calle", type:"name", inputName:"street"},
        {title:"Numero de calle", type:"name", inputName:"streetnumber"},
        {title:"Codigo postal", type:"name", inputName:"postalcode"}
    ]
    function onChangeInput(evt) {
        setOrder({ ...order, [evt.target.name]: evt.target.value});       
    }

    async function sendOrder(e) {
        e.preventDefault();
        const newOrder = {
            buyer:{
                nombre: order.name,
                telefono: order.phone,
                email: order.email,
                calle: order.street,
                nroCalle: order.streetnumber,
                cp: order.postalcode,
            },
            products: productsInCart,
            total: order.total,
            date: Timestamp.fromDate(new Date())
        }
        console.log('new order', newOrder);

        const ordersCollection = collection(db, 'orders');
        const docRef = await addDoc(ordersCollection, newOrder);
        const orderId = docRef.id
        console.log('Orden de compra: ', orderId);
        setPopup(true);
    }
    return <>
        <div className='cartContainer'>
            <div className='cartList'>
                <div className='cartHeader'>
                    <h3 className='cartTitle'>Articulos en el carrito:</h3>
                </div>
                <div className='cartItems'>
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
                <div className='cartFooter'>
                    <h4>Total = {cartContext.getTotalPrice()}</h4>
                </div>   
            </div>
           <div className='formCartContainer'>
                <form onSubmit={sendOrder}>
                    <h5>Ingrese sus datos personales</h5>
                    <br />
                    {
                        campos.map(campo =><>
                                <label>{campo.title}</label>
                                <input type={campo.type} name={campo.inputName} onChange={(evt) => onChangeInput(evt)}/>
                        </>
                        )
                    }

                    {
                        <button
                            className='btn btnCheckout'
                            disabled={!(order.name !== '' && order.email !== "" && order.phone !== "" && order.street !== "")}
                            onClick={(evt) => sendOrder(evt)}>
                            Finalizar Compra
                        </button>  
                    }
                </form>
            </div>
            {
                popup
                ? <div className='popup'>
                    <PopUp setPopup={setPopup} order={order}/>
                </div>
                : ""
            }   
        </div>
                       
    </>
};
export default CartContainer;

