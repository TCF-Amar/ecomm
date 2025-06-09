import React from 'react'
import useProduct from '../store/useProduct';
import Item from './Item.jsx'
import { Link } from 'react-router-dom';
function BestSellers() {
    const products = useProduct((state) => state.products);
    const bestSeller = products.filter((product) => product.bestSeller);
    return (



        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4'>
            {bestSeller.slice(0, 10).map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <Item key={product.id} product={product} />
                </Link>
            ))}
        </div>

    )
}

export default BestSellers