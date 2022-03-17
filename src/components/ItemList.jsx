import React from 'react';
import Item from './Item';


function ItemList({ cardList }) {
    return (
        <div className='itemList'>
            {cardList?.map((cards) =>
                <Item key={cards.id} id={cards.list} name={cards.name} type={cards.type} description={cards.desc} atk={cards.atk} def={cards.def} race={cards.race} image={cards.image_url}
                />)}
        </div>
    )
};

export default ItemList;