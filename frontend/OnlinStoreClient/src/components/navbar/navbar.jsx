import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { House, ShoppingCart, User } from 'phosphor-react'
import { motion } from 'framer-motion';

export const Navbar = () => {

  return (
    <div className="navbar">
        <motion.div className="siteTitle" whileHover={{ scale: 1.1 }}>
        <Link to="/">
          <motion.h1 whileHover={{ color: '#009688' }}>SmartTech Shop</motion.h1>
        </Link>
        </motion.div>
        <div className="links">
        <Link to="/">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <House size={32} />
          </motion.div>
        </Link>
        <Link to="/cart">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart size={32} />
          </motion.div>
        </Link>
        <Link to="/account">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <User size={32} />
          </motion.div>
        </Link>
        </div>
    </div>
  )
}
