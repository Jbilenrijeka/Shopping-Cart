import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-contex';

export const Product = (props) => {  // We gonna grab the props 
    const{id,productName,price,productImage} = props.data // get from props.data all the data that each product has (id,productNAme ,price,productimage)
    
    const{addToCart,cartItems}=useContext(ShopContext);

   const cartItemAmount = cartItems[id]
    return (
    <div className='product'>
    <img src = {productImage}/>
    <div className='description'>
      <p>
        <b>{productName}</b>
      </p>
      <p>${price}</p>
      </div>   
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>

  );
};
