import React from 'react';
import Products from '../../data/products'

export default props =>{

    function getProductsListItem(){
        return Products.map(prod => {
            return <li key={prod.id}>{prod.nome}  ${prod.preco}</li>
        })
    }

    return (
        <div>
            <h2>Repetition</h2>
            <ul>{getProductsListItem()}</ul>
        </div>
    )
}