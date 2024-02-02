import React, { useContext } from 'react';
import './Hero.css';
import { ShoppingCart } from 'phosphor-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = ({ products = [] }) => {

    const [isItemAdded, setIsItemAdded] = useState(false);

    const addToCart = async (product) => {
        try {
            const response = await fetch('/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: "1231231",
                    product_id: product.id,
                    product_name: product.name,
                    product_price: product.price,
                    product_photo: product.photo,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }
            setIsItemAdded(true);
            setTimeout(() => {
                setIsItemAdded(false);
            }, 3000);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };
    

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
                        whileTap={{ scale: 0.9 }}
                        onClick={() => addToCart(product)}>
                        <ShoppingCart /> add to cart
                        </motion.button>
                    </div>
                ))}
            </div>
            {isItemAdded && (
                <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className='addedToCartNotification'>
                <h3>Item added to cart!</h3>
                </motion.div>
            )}
        </div>
    );
};

export default Hero;
