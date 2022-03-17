import React, { useState } from 'react';
import ItemList from './ItemList';
import { getCardsData } from "../App.js";



function ItemListContainer() {
    const [cardList, setCardList] = useState([])
    const getCards = () => {
        getCardsData()
            .then((resolve) => resolve.json())
            .then((cardList) => {
                console.log(cardList)
                setCardList(cardList.data)
            })
    }
    getCards()
    return (
        <div className='itemListContainer'>
            <ItemList cardList={cardList} />
        </div>
    )
}

export default ItemListContainer;