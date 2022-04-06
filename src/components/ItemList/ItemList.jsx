import React from 'react';
import Item from './Item';


function ItemList({ products }) {
    console.log(products)
    return (
        <div className='itemList'>
            {products?.map((cards) =>
                <Item 
                key={cards.id} 
                card={cards}
                />)}
        </div>
    )
};

export default ItemList;