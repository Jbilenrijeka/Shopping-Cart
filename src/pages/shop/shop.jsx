import React from 'react'
import {PRODUCTS} from '../../products';
import { Product } from "./product";
import  "./shop.css";

export const Shop = () => {   // Shop component
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Josip Tech Shop</h1>
        </div>
        <div className='products'>{PRODUCTS.map((product)=>
        <Product data={product}/>  // create prop called data , this will be all data fro specific product that will be passt out 
        )}

        </div>
    </div>
  )
}
