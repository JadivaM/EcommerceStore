import React from 'react';
import {Link}from 'react-router-dom';

const Home = () => {

    return (
        <>
        <div className="home-container">
            <div className="home-hero-image">
              <div className="home-hero-image-contents-container">
                <div className="home-hero-image-contents">
                <p className="home-hero-image--text">Find Essentials For Your Home</p>
                <Link to='/products' style={{textDecoration: 'none'}}>
                  <button className="home-hero-image--button">Shop now</button>
                </Link>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
