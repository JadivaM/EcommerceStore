import React from 'react';
import Button from '@material-ui/core/Button';

const CartTotal = (props) => {
    return (
        <div>
            <p>Total: {props.subtotal}</p>
            <p>{props.items} items</p>
            <Button variant="contained" color="primary" disableElevation>Checkout</Button>
        </div>
    )
}

export default CartTotal
