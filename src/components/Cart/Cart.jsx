import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';


const Cart = ({card, quantity}) => {
    const cartContext = useContext(CartContext)
  return (
    <div className='cartItemContainer'>
        <img src={card.card_images[0].image_url_small} alt="" className='cartItemImage'/>
        <h6 className='cartItemName'>{card.name}</h6>
        <p className='cartItemPrice'>${card.card_prices[0].ebay_price}</p>
        <p className='cartItemQuantity'>x {quantity}</p>
        <button className='btnRemove' onClick={()=>cartContext.removeItem(card.id)}>X</button>
    </div>
  )
}
export default Cart;