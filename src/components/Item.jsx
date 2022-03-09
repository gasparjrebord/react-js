import React from 'react';
import ItemCounter from './ItemCounter';

const Item = () => {
    return (
        <div className='item'>
            <img className='itemImg' src="https://http2.mlstatic.com/D_NQ_NP_829321-MLA46348271392_062021-O.webp" alt="" />
            <div className='itemDescription'>
                <h5 className='itemTitle'>Smart Tv Noblex Dk50x6500 Led 4k 50''</h5>
                <p className='itemPrice'>$ 67300</p>
                <ItemCounter />
            </div>
        </div>
    )
};
export default Item;

