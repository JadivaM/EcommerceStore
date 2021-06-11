import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Badge} from '@material-ui/core';
import NavOptions from './NavOptions';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Searchbar from '../Search/Searchbar';
import DiscountsGrid from '../Discounts/DiscountsGrid';




const Navbar = ({setSearchResults, totalItems}) => {

    return (
        <> 
        <div>
        <AppBar position="static" style={{backgroundColor: '#fff'}}> 
        <Toolbar className="navbar">
          <div className="navbar-searchbar"><Searchbar setSearchResults={setSearchResults} /></div>
         
          <div className="navbar-title-container">
          <Link to="/" style={{textDecoration: 'none'}}>
          <p className="navbar-title">
            Handmade Studio
          </p>
          </Link>
          </div>
         
          <Link to={'/cart'} style={{textDecoration: 'none'}}>
          <IconButton style={{position: 'absolute', right: 0, top: 0, marginTop: 25, color: 'rgba(0, 0, 0, 0.8)'}}>
          <Badge badgeContent={totalItems} color="primary">
          <ShoppingCartIcon />
          </Badge>
          </IconButton>
          </Link>
          <div className="category-options-container"> <NavOptions className="category-options" /></div>
        </Toolbar>
       <div className="discounts-carousel-container">


<DiscountsGrid className="discounts-carousel" />


       </div>
      </AppBar>
            
        </div>
        </>
    )
}

export default Navbar;
