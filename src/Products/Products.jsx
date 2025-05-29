import { useState } from 'react'
import Product from './Product.jsx'
import PData from './ProductData'
import './products.css'
export function Products(){
    return <div id='Products_container'>
        {
            PData.map((product)=>{
               return <Product PDetails={product}/>
            })
        }
    </div>
}