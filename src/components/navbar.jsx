import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css';


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
      <Link to="/">Shop</Link>  
      <Link to="/cart"> 
      <ShoppingCart size={32}/>
      </Link>
      </div>
    </div>

  )     /* to is a prop wich is telling us where we whanna go when we click on this link   */
};  

