import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



const Navbar = () => {

    return (
        <>
        <div>
        <AppBar position="static" style={{backgroundColor: '#fff'}}>
        <Toolbar>
         <IconButton edge="start" color="#000" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="p" className="navbar-title">
            Handmade Studio
          </Typography>
        </Toolbar>
      </AppBar>
            
        </div>
        </>
    )
}

export default Navbar
