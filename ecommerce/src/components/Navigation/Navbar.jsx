import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavOptions from './NavOptions';



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
        
        <AppBar position="static" style={{backgroundColor: '#fff'}}> 
        
        <Toolbar>
      
         <IconButton edge="start" color="#000" aria-label="menu">
            <MenuIcon className="hamburger-icon" onClick={openSidenav} />
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
