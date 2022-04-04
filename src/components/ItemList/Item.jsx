import React from 'react';
import { Link } from 'react-router-dom'
import ItemCounter from '../Counter/ItemCounter';

const Item = ({ card }) => {
    return (
        <div className='item'>
            <Link to={`/${card.type}/${card.id}`}><img className='itemImg' src={card.card_images[0].image_url} alt="" /></Link>
            <div className='itemDescription'>
                <h5 className='itemTitle'>{card.name}</h5>
                <div className='itemStats'>
                    <p>[{card.race}  -  {card.type}]</p>
                    <p>ATK/{card.atk}  -  DEF/{card.def}</p>
                </div>
                <ItemCounter card={card}/>
            </div>
        </div>
    )
};
export default Item;

