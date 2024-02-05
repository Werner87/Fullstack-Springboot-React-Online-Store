import React, { useState } from 'react';
import './Hero.css';
import { ShoppingCart } from 'phosphor-react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const Hero = ({ products = [], setCart}) => {

    const [isItemAdded, setIsItemAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const addToCart = async (product) => {
        try {
            const response = await fetch('/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: "123421",
                    product_id: uuidv4(),
                    product_name: product.name,
                    product_price: product.price,
                    product_photo: product.photo,
                    quantity: quantity,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }
            const newCart = await response.json()
            setCart(oldCart => [...oldCart, newCart])         
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
                                <b className='product-price'> {product.price} $ </b>
                            </p>
                        </div>
                        <div className='quantity-control'>
                            <button onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}>-</button>
                            <input type="number" value={quantity} readOnly />
                            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
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
