import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

const NavOptions = (props) => {
    const [categories, setCategories ] = useState([])

    
    const getCategories = () => {
        try {
            commerce.categories.list().then((categories) => {
                setCategories(categories.data);
                console.log(categories);
          })
        } catch(err) {
          console.log(err)
        }
      }


    useEffect(() => {
        getCategories();
      }, []);

   

    return (
        <>
        <div className='side-nav'>
        <IconButton  color="#000" aria-label="exit">
            <ClearIcon className="exit-icon" onClick={props.closeNav} />
          </IconButton>
          <div className="side-nav-main-container">
            <Typography variant="p" className="navbar-title side-nav-title">
            Handmade Studio
            </Typography>
            <ul className="side-nav-container-links">
            {categories.map((category) => (
            <Link to={`category/products/${category.slug}`}>
            <li className="side-nav-links">{category.name}</li>
            </Link>
            ))}
           </ul>
        </div>
        </div>
        </>
    )
}

export default NavOptions;
