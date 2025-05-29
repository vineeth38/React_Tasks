import { useState } from 'react'
import './products.css'
function Product(product){
    console.log(product.PDetails.images[0])
    return <div className='product'>
        <img src={product.PDetails.images[0]} alt=""/>
        <h4>{product.PDetails.title}</h4>
        <span>Category : {product.PDetails.category}</span>
        <span>rating :{product.PDetails.rating}</span>
        <h3>Price :{product.PDetails.price}</h3>
    </div>
}
export default Product;