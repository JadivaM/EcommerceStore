import React from 'react';
import Divider from '@material-ui/core/Divider';

const CartProducts = (props) => {

    return (
        <>
        <div className="shopping-cart-products-main-container">
        <Divider id="shopping-cart-item-divider"/> 
        <div className="shopping-cart-items-container">
            <img style={{width: 200, height: 200, objectFit: 'cover'}}src={props.image} alt={props.name}/>
            <div className="shopping-cart-items-column">
            <p>{props.name}</p>
            </div>
            <div className="shopping-cart-items-column">
            <p>{props.quantity}</p>
            </div>
            <div className="shopping-cart-items-column">
            <p>{props.price}</p>
            </div>
        </div> 
        </div>
        </>
    )
}

export default CartProducts
