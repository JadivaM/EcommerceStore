import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

const AddToCartButton = (props, {quantity}) => {
const [addToCart, setAddToCart] = useState(null);
const productId = `${props.id}`;
const qty = (quantity);
console.log(qty)

const handleAddToCart = () => {
    try {
        commerce.cart.add(productId, qty).then((res) => {
            setAddToCart(res); 
            console.log(res);
            })
    } catch(err) {
        console.log(err);
    }
}

    return (
        <div>
        <Button variant="contained" color="primary" onClick={handleAddToCart}>
        Add to cart
        </Button>
        </div>
    )
}

export default AddToCartButton
