import React from 'react';
import Hero from '../hero/Hero';

const Home = ({products, setCart}) => {    
    return(
        <div>
            <Hero products={products} setCart={setCart} />
        </div>
    );
};

export default Home