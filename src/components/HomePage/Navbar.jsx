// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'


export const Navbar = () => {
  return (
      <div className='navbar'>
          <img className="logo" src='./src/assets/images/logo.png' alt='logo'/>
          <input className="search" type="text" placeholder='Search'></input>
          <Link className="link"  to='/'>Home</Link>
          <Link className="link" to='/about'>About</Link>
          <Link className="link" to='/contactus'>Contact us</Link>
          <Link className="link" to='/blog'>Blog</Link>
          <Link to='/favorite'><span className="material-symbols-outlined">favorite</span></Link>
          <Link to='/cart'><span className="material-symbols-outlined">shopping_cart</span></Link>
          <Link to='/person'><span className="material-symbols-outlined">person</span></Link>
      </div>
  )
}
export default Navbar;