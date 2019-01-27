import React from 'react';
import Product from './Product';


const ProductList = ({ products, cookies }) => {
    return (
        <div>
            <h2>
                Book List<br />
            </h2>
            <hr />
            <div className="row">
                {products.map(product => {
                    return (
                        <Product product={product} cookies={cookies} key={product.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList;