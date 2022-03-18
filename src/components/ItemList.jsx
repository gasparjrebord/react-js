import React from 'react';
import Item from './Item';


function ItemList({ cardList }) {
    return (
        <div className='itemList'>
            {cardList?.map((cards) =>
                <Item key={cards.id} {...cards} image={cards.card_images[0].image_url} />)}
        </div>
    )
};

export default ItemList;