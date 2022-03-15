import React from 'react';
import ItemCounter from './ItemCounter';

const Item = ({ key, name, type, description, atk, def, level, race, attribute, archetype, image }) => {
    return (
        <div className='item'>
            <img className='itemImg' src={image} alt={key} />
            <div className='itemDescription'>
                <h5 className='itemTitle'>{name}</h5>
                <div className='itemStats'>
                    <p>[{race}  -  {type}]</p>
                    <p>ATK/{atk}  -  DEF/{def}</p>
                </div>

                <p className='itemDesc'>{description}</p>
                <ItemCounter />
            </div>
        </div>
    )
};
export default Item;

