import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavOptions from './NavOptions';
import {Link} from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Navbar = (props) => {
  const [wid, setWid] = useState(false);

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
        <AppBar position="relative" style={{backgroundColor: '#fff'}}> 
        <Toolbar>
         <IconButton edge="start" color="#000" aria-label="menu">
            <MenuIcon className="hamburger-icon" onClick={openSidenav} />
          </IconButton>
          <Link to="/" style={{textDecoration: 'none'}}>
          <Typography variant="p" className="navbar-title">
            Handmade Studio
          </Typography>
          </Link>
          <Link to={'/cart'} style={{textDecoration: 'none'}}>
          <IconButton style={{position: 'absolute', right: 0, marginRight: 20, color: 'rgba(0, 0, 0, 0.8)'}}>
          <ShoppingBasketIcon />
          </IconButton>
          </Link>
        </Toolbar>

      </AppBar>
            
        </div>
        </>
    )
}

export default Navbar
