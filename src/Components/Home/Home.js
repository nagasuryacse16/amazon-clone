import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return ( 
        <div className='home'>
            <div className='home__container'>
                <a href="https://www.primevideo.com/">
                <img
                    className='home__image' 
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/CrashCourse/3000x1200_Hero-Tall_NP._CB630721605_.jpg'
                    alt='amazon_banner'/>
                </a>
                <div className='home__row'>
                    <Product 
                            id="23552234"
                            title='boAt Airdopes 141 True Wireless Earbuds with 42H Playtime'
                            price={2499}
                            image="https://m.media-amazon.com/images/I/51MVfB-9YmL._AC_UY327_FMwebp_QL65_.jpg"
                            rating={4}/>
                    <Product 
                            id="23534523"
                            title='Apple iPhone 13(128GB) - Blue, 15 cm (6.1-inch) Super Retina XDR display'
                            price={73000.45}
                            image="https://images-eu.ssl-images-amazon.com/images/I/71xb2xkN5qL._AC._SR360,460.jpg"
                            rating={4}/>
                    <Product 
                            id="23323534"
                            title='Echo Dot with clock (4th Gen, Blue) Combo with Wipro 16A Smart Plug'
                            price={4682}
                            image="https://m.media-amazon.com/images/I/61NIsUGl+FL._AC_UY327_FMwebp_QL65_.jpg"
                            rating={5}/>
                </div>

                <div className='home__row'>
                    <Product 
                            id="23532534"
                            title='Sony WH-CH710N Active Noise Cancelling Wireless Headphones Bluetooth Over The Ear Headset'
                            price={8599}
                            image="https://m.media-amazon.com/images/I/61N6Ai7RkJL._AC_SX451_SY423_.jpg"
                            rating={5}/>
                    <Product 
                            id="23526634"
                            title='DualSense Wireless Controller - Starlight Blue for PlayStation 5'
                            price={6990}
                            image="https://m.media-amazon.com/images/I/61kRMZECtOL._AC_UY327_FMwebp_QL65_.jpg"
                            rating={5}/>            
                </div>

                <div className='home__row'>
                    <Product 
                            id="23512034"
                            title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black), Monitor with Stand, Power Cable, HDMI Cable, DP Cable, Install CD and Quick Setup Guide. 144 Hz refresh rate. 178 degrees vertical viewing angle.'
                            price={48000.45}
                            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                            rating={3}/>
                </div>    
            </div>
        </div>
     );
}

export default Home;