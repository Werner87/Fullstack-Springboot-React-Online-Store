import React, { useEffect } from 'react';
import './Cart.css';

const Cart = ({ cart = [] }) => {

    return (
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.product_id} className="cart-item">
                            <div className="cart-item-info">
                                <p>{item.user_id}</p>
                                <p className="cart-item-price">{item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
