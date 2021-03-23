import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {
    return (
        <>
        <div>
        <AppBar position="static" style={{backgroundColor: 'white'}}>
        <Toolbar>
          <IconButton edge="start" aria-label="menu" style={{color: 'black'}}>
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
