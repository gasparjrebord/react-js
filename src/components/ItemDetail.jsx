import React from 'react'
import ItemCounter from './ItemCounter';

const ItemDetail = ({ id, name, type, desc, atk, def, race, image }) => {


    const addToCart = () => {
        const cardToCart = {
            id,
            name,
            image
        }

        console.log(cardToCart)
    };

    return (
        <div className='itemDetail'>
            <img className='itemDetailImg' src={image} alt="" />
            <div className='itemDetailDescription'>
                <h5 className='itemDetailTitle'>{name}</h5>
                <div className='itemDetailStats'>
                    <p>[{race}  -  {type}]</p>
                    <p>ATK/{atk}  -  DEF/{def}</p>
                </div>
                <p className='itemDetailEffect'>{desc}</p>
                <ItemCounter
                    addToCart={addToCart}
                />
            </div>
        </div>
    )
};
export default ItemDetail;