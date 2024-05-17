import React from 'react';
//import {Link} from 'react-router-dom';
import logo from './assets/The Spice Tradition.png';
import {ShoppingCart} from 'phosphor-react';
import './navbar.css'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <a href='/'><img src={logo}/>
            <p><b>The Spice Tradition</b><br/>
            <i>by Anuraj</i></p></a>
        </div>
        <ul className="nav-menu">
            <li>All Spices</li>
            <li>Recipes</li>
            <li>About Us</li>
        </ul>
         <div className="login-cart">
            <button>Login</button>
            <ShoppingCart className="shoppingCart" size={32} />
            <div className="cart-counter">
            0
         </div>
         </div>
    </div>
  )
}

