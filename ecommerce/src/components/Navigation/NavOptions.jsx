import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import {Link, useLocation} from 'react-router-dom';

const NavOptions = (props) => {
    const [categories, setCategories ] = useState([])
    const [click, setClick] = useState(false);
    const location = useLocation();

    const closeSidenav = () => {
      setClick(false)
    }
  
    const openSidenav = ( ) => {
        setClick(!click)
     }
  
    
    const getCategories = async () => {
        try {
            await commerce.categories.list().then((categories) => {
                setCategories(categories.data);
               
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
          {click ? ( <IconButton className="hamburger-icon-container" edge="start" aria-label="exit">
            <ClearIcon className="menu-icon" onClick={closeSidenav} />
          </IconButton>) : ( <IconButton className="hamburger-icon-container" edge="start" aria-label="menu">
            <MenuIcon className="menu-icon" onClick={openSidenav} />
          </IconButton>)}
       
          <div className="side-nav-main-container">
            <div className="category-links-container">
            <ul className="side-nav-container-links">
            {categories.map((category) => (
              <Link key={category.id} to={`/category/products/${category.slug}`} replace={location.pathname === "/"} style={{textDecoration: 'none'}}>
                <li  className="side-nav-links">{category.name}</li>
              </Link>
            ))}
           </ul>
           </div>
        </div>
        </div>
        </>
    )
}

export default NavOptions;
