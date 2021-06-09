import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const RelatedProducts = (props) => {
    const [display, setDisplay] = useState("notdisplayed");
   
    const showInfo = e => {
      e.preventDefault();
      setDisplay("displayed");
    };
  
    const hideInfo = e => {
      e.preventDefault();
      setDisplay("notdisplayed");
    };


    return (
        <div className="related-products-container">
            <div className="related-products-image-container" 
            onMouseEnter={e => showInfo(e)}
            onMouseLeave={e => hideInfo(e)}>
            <img 
             className="related-products-image" src={props.image} alt={props.name}/>
            <div className="related-products-info">
            <Link to={`/product/${props.id}`} style={{ color: '#000'}}>
            <p className={display}>{props.name}</p>
            </Link>
            <p className={display}>{props.price}</p>
            </div>
            </div>
        </div>
    )
}

export default RelatedProducts
