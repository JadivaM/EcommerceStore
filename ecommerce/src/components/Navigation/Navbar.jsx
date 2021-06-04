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
        <Toolbar>
         <IconButton edge="start" color="#000" aria-label="menu">
            <MenuIcon className="hamburger-icon" onClick={openSidenav} />
          </IconButton>
          <Link to="/" style={{textDecoration: 'none'}}>
          <Typography variant="p" className="navbar-title">
            Handmade Studio
          </Typography>
          </Link>
          <Searchbar setSearchResults={setSearchResults} />
          <Link to={'/cart'} style={{textDecoration: 'none'}}>
          <IconButton style={{position: 'absolute', right: 0, top: 0, marginRight: 20, marginTop: 5, color: 'rgba(0, 0, 0, 0.8)'}}>
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
