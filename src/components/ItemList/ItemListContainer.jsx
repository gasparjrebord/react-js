import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getData } from '../../App';




function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()

    const getCards = () => {
        setLoading(true)
        getData()
            .then((res) => {
                console.log(res)
                if (!categoryId) {
                    setProducts(res)
                } else {
                    setProducts(res?.filter((cards) => cards.type === categoryId))
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
                        <ItemList products={products} />
                    </div>
            }
        </>
    )
}

export default ItemListContainer;