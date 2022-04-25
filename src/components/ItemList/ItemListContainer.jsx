import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getData } from '../../App';




function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        getData()
        .then((res) => {
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
            setTimeout(() => {
                setLoading(false)
            }, 1000);   
        })    
    },[categoryId])

    return (
        <>
            {
                loading
                    ? <img src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" alt="loading-spin" className='loadingSpin'/>
                    : <div className='itemListContainer'>
                        <ItemList products={products} />
                    </div>
            }
        </>
    )
}

export default ItemListContainer;