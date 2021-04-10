import React from 'react';
import Navbar from '../Navigation/Navbar';
import {Link}from 'react-router-dom';
import DiscountsGrid from '../Discounts/DiscountsGrid';

const Home = () => {

    return (
        <>
        <div className="home-container">
          <Navbar />
            <div className="home-hero-image">
              <div className="home-hero-image-contents-container">
                <div className="home-hero-image-contents">
                <p className="home-hero-image--text">Find Essentials <br/> For Your Home</p>
                <Link to='/products' style={{textDecoration: 'none'}}>
                  <button className="home-hero-image--button">Shop now</button>
                </Link>
                </div>
                </div>
            </div>
            <DiscountsGrid />
        </div>
        </>
    )
}

export default Home;
