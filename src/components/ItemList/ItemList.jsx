import React from 'react';
import Item from './Item';


function ItemList({ cardList }) {
    return (
        <div className='itemList'>
            {cardList?.map((cards) =>
                <Item 
                key={cards.id} 
                card={cards}
                />)}
        </div>
    )
};

export default ItemList;