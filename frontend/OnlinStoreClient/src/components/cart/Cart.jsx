import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Cart.css';

const Cart = ({ cart = [] }) => {

    const userCart = cart.filter(item => item.user_id === "123421");

    return (
        <div className="cart-container">
            <div className="cart-title"><h1>Shopping Cart</h1></div>
            {userCart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    
                    {userCart.map((item) => (
                        <li key={uuidv4()} className="cart-item">
                            <div className="description">
                                <p>
                                    <img src={item.product_photo} />
                                </p>
                                <p className='cart-item-name'> 
                                    {item.product_name}
                                </p>
                                <p className="cart-item-price">
                                    {item.product_price} $
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
