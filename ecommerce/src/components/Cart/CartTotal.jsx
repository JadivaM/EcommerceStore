import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';

const CartTotal = (props) => {
    return (
        <>
            <Paper elevation={3} className="cart-paper">
            <p>{props.items} items</p>
            <p>Subtotal: {props.subtotal}</p>
            <Link to="/checkout" style={{textDecoration: 'none'}}>
            <button className="checkout-button">Checkout</button>
            </Link>
            </Paper>
        </>
    )
}

export default CartTotal;
