import React from 'react';
import {Link} from 'react-router-dom';

const RelatedProducts = (props) => {
    return (
        <div className="related-products-container">
            <img className="related-products-image" src={props.image} alt={props.name}/>
            <Link to={`/product/${props.id}`}>
            <p className="related-products-name">{props.name}</p>
            </Link>
            <p className="related-products-price">{props.price}</p>
        </div>
    )
}

export default RelatedProducts
