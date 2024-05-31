import React from 'react';
import logo from './assets/The Spice Tradition.png';
import customer from './assets/customer.png';
import {ShoppingCart} from 'phosphor-react';
import './navbar.css'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <a className="navbarLinks" href='/Home' style={{textDecoration : 'none'}} ><img className="logoIcon" src={logo}/>
            <p className="headingName"><b>The Spice Tradition</b><br/>
            <i>by Anuraj</i></p></a>
        </div>
        <ul className="nav-menu">
            <li><Link to ='/Home' className="navbarLinks" style={{textDecoration : 'none'}}>Home</Link></li>
            <li><Link to ='/AllSpices' className="navbarLinks" style={{textDecoration : 'none'}}>All Spices</Link></li>
            <li><Link to ='/Recipes' className="navbarLinks" style={{textDecoration : 'none'}}>Recipes</Link></li>
            <li><Link to = '/About-us' className="navbarLinks" style={{textDecoration : 'none'}}>Offers</Link></li>
            <li><Link to = '/About-us' className="navbarLinks" style={{textDecoration : 'none'}}>Gift Boxes</Link></li>
        </ul>
         <div className="login-cart">
            <Link to ='/LoginSignUp' className="navbarLinks" style={{textDecoration : 'none'}}><button>Login/SignUp</button></Link>
            <Link to ="/customer-help" className="navbarLinks" ><img src={customer}></img></Link>
            <Link to = '/Cart' className="navbarLinks" style={{textDecoration : 'none'}}><ShoppingCart className="shoppingCart" size={32} /></Link>
            <div className="cart-counter">
            0
         </div>
         </div>
    </div>
  )
}

