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
            <p className="side-nav__links">Bathroom</p>
            <p className="side-nav__links">Bedroom</p>
            <p className="side-nav__links">Home</p>
            <p className="side-nav__links">Kitchen</p>
            <p className="side-nav__links">Outdoor</p>
            </div>
        </div>
        </>
    )
}

export default NavOptions;
