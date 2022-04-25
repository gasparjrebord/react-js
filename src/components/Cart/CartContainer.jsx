import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Cart from './Cart';
import { addDoc, collection, doc, Timestamp } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import PopUp from '../PopUp/PopUp';


const CartContainer = () => {

    const cartContext = useContext(CartContext);
    const productsInCart = cartContext.productsInCart;
    const [popup, setPopup] = useState(false)
    const [order, setOrder] = useState({name: '', phone: '', email:'', street: '', streetnumber: '', postalcode: ''})
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
                Nombre: order.name,
                Telefono: order.phone,
                Email: order.email,
                Calle: order.street,
                NroCalle: order.streetnumber,
                Cp: order.postalcode
            },
            products: productsInCart,
            total: cartContext.getTotalPrice(),
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
                            disabled={!(order.name !== '' && order.email !== "")}
                            onClick={(evt) => sendOrder(evt)}>
                            Finalizar Compra
                        </button>  
                    }
                </form>
            </div>        
        </div> 
        <PopUp trigger={popup} setTrigger={setPopup}>
            <h3>Su orden de compra fue creada con exito</h3>
            <hr /><br />
            <p>Orden de compra Nro {order.id}</p>
            <br /><hr />
            <h4>Datos de facturacion</h4>
            <br />
            <p>Nombre: {order.name}</p>
            <p>Telefono: {order.phone}</p>
            <p>Email: {order.email}</p>
            <p>Calle: {order.street}</p>
            <p>Nro de calle: {order.streetnumber}</p>
            <p>CP: {order.postalcode}</p>
            <br />
            <p>Total: {cartContext.getTotalPrice()}</p>
        </PopUp>                   
    </>
};
export default CartContainer;

