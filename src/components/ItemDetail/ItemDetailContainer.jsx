import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCardsData } from "../../App";

const ItemDetailContainer = () => {
    const [card, setCard] = useState(null)
    const [loading, setLoading] = useState(true)

    const { cardId } = useParams()


    useEffect(() => {
        setLoading(true)

        getCardsData()
            .then((resolve) => resolve.json())
            .then((card) => {
                setCard(card.data.find((cards) => cards.id === Number(cardId)))
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <div className='itemDetailContainer'><ItemDetail {...card} image={card.card_images[0].image_url} /></div>
            }
        </>
    )
}
export default ItemDetailContainer