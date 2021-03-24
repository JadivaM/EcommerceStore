import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {

    return (
        <>
        <div>
        <AppBar position="static" style={{backgroundColor: '#fff'}}>
        <Toolbar>
          <Typography variant="p" className="navbar-title">
            Handmade Studio
          </Typography>
          <Typography variant="p" className="navbar-text">
            Categories
          </Typography>
          <Typography variant="p" className="navbar-text">
            New Arrivals
          </Typography>
          <Typography variant="p" className="navbar-text">
            Sale
          </Typography>
        </Toolbar>
      </AppBar>
            
        </div>
        </>
    )
}

export default Navbar
