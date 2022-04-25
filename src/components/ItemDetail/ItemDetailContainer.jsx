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
                setTimeout(() => {
                    setLoading(false)
                }, 500);
            })
    }, [cardId])

    return (
        <>
            {
                loading
                    ? <img src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" alt="loading-spin" className='loadingSpin'/>
                    : <div className='itemDetailContainer'>
                        <ItemDetail key={cardId} card={card}/>
                    </div>
            }
        </>
    )
}
export default ItemDetailContainer