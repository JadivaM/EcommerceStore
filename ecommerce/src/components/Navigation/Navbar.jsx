import React, { useState, useEffect } from 'react';
import {AppBar, Toolbar, Typography, IconButton, Badge} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavOptions from './NavOptions';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Searchbar from '../Search/Searchbar';

const Navbar = ({setSearchResults, totalItems}) => {
  const [wid, setWid] = useState(false);

  useEffect(() => {
    console.log(totalItems)
  }, [totalItems])

  const closeSidenav = () => {
    setWid(false)
  }

  const openSidenav = ( ) => {
      setWid(!wid)
   }

    return (
        <>
          {wid ? <NavOptions width={wid} closeNav={closeSidenav} /> : null}
        <div>
        <AppBar position="static" style={{backgroundColor: '#fff'}}> 
        <Toolbar className="navbar">
         <IconButton className="hamburger-icon-container" edge="start" color="#000" aria-label="menu">
            <MenuIcon className="hamburger-icon" onClick={openSidenav} />
          </IconButton>
          <div className="navbar-searchbar"><Searchbar setSearchResults={setSearchResults} /></div>
         
          <div className="navbar-title-container">
          <Link to="/" style={{textDecoration: 'none'}}>
          <p className="navbar-title">
            Handmade Studio
          </p>
          </Link>
          </div>
         
          <Link to={'/cart'} style={{textDecoration: 'none'}}>
          <IconButton style={{position: 'absolute', right: 0, top: 0, marginTop: 10, color: 'rgba(0, 0, 0, 0.8)'}}>
          <Badge badgeContent={totalItems} color="primary">
          <ShoppingCartIcon />
          </Badge>
          </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
            
        </div>
        </>
    )
}

export default Navbar
