import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from "../../App";

const ItemDetailContainer = () => {
    const [card, setCard] = useState(null)
    const [loading, setLoading] = useState(true)

    const { cardId } = useParams()


    useEffect(() => {
        setLoading(true)
        getData()
            .then((res) => {
                setCard(res?.find((cards) => cards.id === cardId))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [cardId])

    return (
        <>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <div className='itemDetailContainer'>
                        <ItemDetail key={cardId} card={card}/>
                    </div>
            }
        </>
    )
}
export default ItemDetailContainer