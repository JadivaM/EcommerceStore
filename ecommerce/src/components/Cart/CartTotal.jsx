import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const CartTotal = (props) => {
    return (
        <div className="cart-total-container">
            <Paper elevation={3} className="cart-paper">
            <p>{props.items} items</p>
            <p>Total: {props.subtotal}</p>
            <Button variant="contained" color="primary" disableElevation>Checkout</Button>
            </Paper>
        </div>
    )
}

export default CartTotal;
