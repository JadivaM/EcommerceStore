import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton, Typography } from '@material-ui/core';

const NavOptions = (props) => {

   

    return (
        <>
        <div className='side-nav'>
        <IconButton  color="#000" aria-label="exit">
            <ClearIcon className="exit-icon" onClick={props.closeNav} />
          </IconButton>
          <div className="side-nav-container-links">
            <Typography variant="p" className="navbar-title side-nav-title">
            Handmade Studio
            </Typography>
            <p className="side-nav__links">Categories</p>
            <p className="side-nav__links">New arrivals</p>
            <p className="side-nav__links">Sale</p>
            </div>
        </div>
        </>
    )
}

export default NavOptions;
