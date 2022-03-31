import React from 'react'
import ItemCounter from '../Counter/ItemCounter';

const ItemDetail = ({ id, name, type, desc, atk, def, race, image }) => {


    

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
                <ItemCounter id={id} name={name} image={image}/>
            </div>
        </div>
    )
};
export default ItemDetail;