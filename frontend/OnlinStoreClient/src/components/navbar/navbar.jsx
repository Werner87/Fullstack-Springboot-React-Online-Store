import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { House, ShoppingCart, User } from 'phosphor-react'
import Home from '../home/Home'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="siteTitle">
          <Link to="/"> <h1>SmartTech Shop</h1></Link>
        </div>
        <div className="links">
          <Link to="/">
            <House size={32}/>
          </Link>
          <Link to="/cart">
            <ShoppingCart   size={32}/>
          </Link>
          <Link to="/account">
            <User size={32}/>
          </Link>
        </div>
    </div>
  )
}
