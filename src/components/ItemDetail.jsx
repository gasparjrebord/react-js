import React from 'react'
import ItemCounter from './ItemCounter';

const ItemDetail = ({ id, name, type, description, atk, def, race, image }) => {


    const addToCart = () => {
        const cardToCart = {
            id,
            name,
            image
        }

        console.log(cardToCart)
    };

    return (
        <div className='item'>
            <img className='itemImg' src={image} alt="" />
            <div className='itemDescription'>
                <h5 className='itemTitle'>{name}</h5>
                <div className='itemStats'>
                    <p>[{race}  -  {type}]</p>
                    <p>ATK/{atk}  -  DEF/{def}</p>
                </div>
                <p className='itemDesc'>{description}</p>
                <ItemCounter
                    addToCart={addToCart}
                />
            </div>
        </div>
    )
};
export default ItemDetail;