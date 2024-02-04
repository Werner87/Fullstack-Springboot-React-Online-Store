import React from 'react';
import './Cart.css';
import { Trash } from 'phosphor-react';

const Cart = ({ cart = []}, setCart) => {

    const userCart = cart.filter(item => item.user_id === "123421");
    const totalPrice = userCart.reduce((total, item) => total + item.product_price, 0).toFixed(2);

    const removeFromCart = async (item) => {
    try {
        const id = item.product_id;
        const idS = id.toString();

        const response = await fetch(`http://localhost:8080/api/cart/${idS}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to remove item from cart');
        } 
        const newCart = await response.json()
        setCart(oldCart => [...oldCart, newCart])
    } catch (error) {
        console.error('Error removing item from cart:', error);
    }
};


    return (
        <div className="cart-container">
            <div className="cart-title"><h1>Shopping Cart</h1></div>
            {userCart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                <ul className="cart-list">
                    {userCart.map((item) => (
                        <li key={item.product_id} className="cart-item">
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
                            <div className="remove-icon" onClick={() => removeFromCart(item)}>
                                <Trash size={24} color="#000" />
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="total-price">
                Total price: {totalPrice} $
                </div>
                </>
            )}
        </div>
    );
}

export default Cart;
