import React from 'react';
import Item from './Item';

const ItemList = ({ cardList }) => {
    return (
        <div className='itemList'>
            {cardList.map((cards) =>
                <Item key={cards.id} name={cards.name} type={cards.type} description={cards.desc} atk={cards.atk} def={cards.def} level={cards.level} race={cards.race} attribute={cards.attribute} archetype={cards.archetype} image={cards.image_url}
                />)}
        </div>
    )
};
export default ItemList;