import classes from './ItemListContainer.module.css'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const asyncFunction = () => getProducts()

    const { data: products, loading, error } = useAsync(asyncFunction, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }

    return (
        <>
            <h1 className={`${classes.color}`}>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer