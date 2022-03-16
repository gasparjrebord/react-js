import React, { useState } from 'react';
import { getCards } from '../App';
import ItemList from './ItemList';


function ItemListContainer() {
    const [cardList, setCardList] = useState([])
    const getCardData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let cardArray = []
                if (cardArray.length === 0) {
                    reject("No hay productos disponibles")

                } else {
                    resolve(cardArray)
                }

            }, 3000);

        })

    }
    getCardData().then((cardArray) => {
        console.log(cardArray)
    }).catch((err) => {
        console.log(err)
    })

    return (
        <div className='itemListContainer'>
            <ItemList cardList={cardList} />
        </div>
    )
}

export default ItemListContainer;