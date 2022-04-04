import React from 'react'
import { Link } from 'react-router-dom';
import ItemCounter from '../Counter/ItemCounter';

const ItemDetail = ({ card }) => {


    

    return (
        <div className='itemDetail'>
            <img className='itemDetailImg' src={card.card_images[0].image_url} alt="" />
            <div className='itemDetailDescription'>
                <h5 className='itemDetailTitle'>{card.name}</h5>
                <div className='itemDetailStats'>
                    <p>[{card.race}  -  {card.type}]</p>
                    <p>ATK/{card.atk}  -  DEF/{card.def}</p>
                </div>
                <p className='itemDetailEffect'>{card.desc}</p>
              
                    <ItemCounter card={card}/>
                    <Link to="/cart" className='btnCheckout'>Finalizar compra</Link>
                
                
            </div>
        </div>
    )
};
export default ItemDetail;