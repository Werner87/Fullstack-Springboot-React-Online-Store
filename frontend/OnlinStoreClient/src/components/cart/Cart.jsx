import React from 'react';
import './Cart.css';
import axios from 'axios';
import { Trash } from 'phosphor-react';

const Cart = ({ cart = [], setCart}) => {

    const userCart = cart.filter(item => item.user_id === "123421");
    const totalPrice = userCart.reduce((total, item) => total + item.product_price*item.quantity, 0).toFixed(2);
    
    const loadCart = async () => {
        const result = await axios.get("/api/cart")
        setCart(result.data)
    }
    
    const removeFromCart = async (id) => {
        await axios.delete(`/api/cart/${id}`)
        loadCart()
    }

    const updateQuantity = async (item, newQuantity) => {
        const updatedCart = cart.map(cartItem => {
            if (cartItem.product_id === item.product_id) {
                return { ...cartItem, quantity: newQuantity };
            }
            return cartItem;
        });
        setCart(updatedCart);

        try {
            await axios.put(`/api/cart/${item.product_id}`, { quantity: newQuantity });
            loadCart();
        } catch (error) {
            console.error("Error updating quantity:", error);
            setCart(cart);
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
                                <div className="quantity-control">
                                    <p>
                                        <button onClick={() => updateQuantity(item, Math.max(item.quantity - 1, 1))}>-</button>
                                        <input type="number" value={item.quantity} readOnly />
                                        <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                                    </p>
                                </div>
                                <div className="remove-icon" onClick={() => removeFromCart(item.product_id)}>
                                <p>
                                    <Trash size={27}/>
                                </p>
                                </div>
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
