import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getCardsData } from "../App.js";
import { useParams } from 'react-router-dom';



function ItemListContainer() {
    const [cardList, setCardList] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()

    const getCards = () => {
        setLoading(true)
        getCardsData()
            .then((resolve) => resolve.json())
            .then((cardList) => {
                if (!categoryId) {
                    setCardList(cardList.data)
                } else {
                    setCardList(cardList.data.filter((cards) => cards.type === categoryId))
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    useEffect(() => {
        getCards()
    }, [categoryId])


    return (
        <>
            {
                loading
                    ? <h2>Loading...</h2>
                    : <div className='itemListContainer'>
                        <ItemList cardList={cardList} />
                    </div>
            }
        </>
    )
}

export default ItemListContainer;