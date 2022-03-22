import React from 'react';
import { Link } from 'react-router-dom'
import ItemCounter from './ItemCounter';

const Item = ({ id, name, type, atk, def, race, image }) => {
    return (
        <div className='item'>
            <Link to={`/info/${id}`}><img className='itemImg' src={image} alt="" /></Link>
            <div className='itemDescription'>
                <h5 className='itemTitle'>{name}</h5>
                <div className='itemStats'>
                    <p>[{race}  -  {type}]</p>
                    <p>ATK/{atk}  -  DEF/{def}</p>
                </div>
                <ItemCounter />
            </div>
        </div>
    )
};
export default Item;

