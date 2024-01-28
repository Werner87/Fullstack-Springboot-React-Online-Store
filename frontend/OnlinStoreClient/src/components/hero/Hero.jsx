import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { ShoppingCart } from 'phosphor-react';

const Hero = ({ products = [] }) => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
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
                        <button className='addToCartBtn'> <ShoppingCart/> add to cart </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
