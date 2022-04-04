import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';


const CartWidget = ({card, quantity}) => {
    const cartContext = useContext(CartContext)
  return (
    <div className='itemWidgetContainer'>
        <img src={card.card_images[0].image_url_small} alt="" className='itemWidgetImage'/>
        <h6 className='itemWidgetName'>{card.name}</h6>
        <p className='itemWidgetPrice'>${card.card_prices[0].ebay_price}</p>
        <p className='itemWidgetQuantity'>x {quantity}</p>
        <button className='btnRemove' onClick={()=>cartContext.removeItem(card.id)}>X</button>
    </div>
  )
}
export default CartWidget;