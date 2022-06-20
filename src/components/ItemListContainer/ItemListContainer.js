import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        if (!categoryId) {
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
            }).finally(() => {
                setLoading(false)
            })
        }

    }, [categoryId])

    if (loading) {
        return <div>
            <h1>Cargando...</h1>
        </div>


    }

    return (
        <div>
            <h1>{props.greeting}</h1>
            {products.length > 0
                ? <ItemList products={products} />
                : <h1>Lo sentimos, no hay productos de la categoría seleccionada</h1>
            }
        </div>
    )
}

export default ItemListContainer