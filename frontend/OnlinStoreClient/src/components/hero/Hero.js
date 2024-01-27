import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';

const Hero = ({ products = [] }) => {

    return(
        <div className='products-carousel-container'>
           <Carousel>
            {products.map((product) =>{
                    return(
                        <Paper>
                            <div className='products-card-container'>
                                <div className='products-card'>
                                    <div className='products-detail'>
                                        <div className='products-poster'>
                                            <img src={product.poster} alt="" />
                                        </div>
                                        <div className='products-title'>
                                            <h4>{product.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
           </Carousel>
        </div>
    )
}

export default Hero