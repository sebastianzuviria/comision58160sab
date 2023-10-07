import classes from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
    }, [])


    // console.log(products)
    // const productsComponents = products.map(prod => {
    //     return (
    //         <div key={prod.id}>
    //             <h1>{prod.name}</h1>
    //             <img src={prod.img} style={{ width: 100}}/>
    //             <h2>${prod.price}</h2>
    //         </div>
    //     )
    // })

    // console.log(productsComponents)
    return (
        <>
            <h1 className={`${classes.color}`}>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer