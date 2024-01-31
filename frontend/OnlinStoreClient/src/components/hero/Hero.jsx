import React from 'react';
import './Hero.css';
import { ShoppingCart } from 'phosphor-react';
import { motion } from 'framer-motion';

const Hero = ({ products = [] }) => {
    return (
            <div className='shop'>
            <div className='sitepTitle'>
                <h1>SmartTech Shop</h1>
            </div>
            <div className='products'>
                {""}
                {products.map((product) => (
                    <div key={product.id} className='product'>
                        <img src={product.photo} />
                        <div className='description'>
                            <p>
                                <b> {product.name} </b>
                            </p>
                            <p>
                                <b> {product.price} $ </b>
                            </p>
                        </div>
                        <motion.button
                        className='addToCartBtn'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <ShoppingCart /> add to cart
                        </motion.button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
