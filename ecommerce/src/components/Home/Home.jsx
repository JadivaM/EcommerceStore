import React from 'react';
import Navbar from '../Navigation/Navbar';
import {Link}from 'react-router-dom';

const Home = () => {

    return (
        <>
        <div className="home-container">
          <Navbar />
            <div className="home-hero-image">
                <p className="home-hero-image--text">Find Essentials For Your Home</p>
                <Link to='/products' style={{textDecoration: 'none'}}>
                  <button className="home-hero-image--button">Shop now</button>
                </Link>
               
            </div>
        </div>
        </>
    )
}

export default Home;
