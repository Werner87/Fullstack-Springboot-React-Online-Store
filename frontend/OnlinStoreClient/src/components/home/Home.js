import React from 'react';
import Hero from '../hero/Hero';

const Home = ({ products }) => {
    return(
        <div>
            <Hero products = {products} />
        </div>
    );
};

export default Home