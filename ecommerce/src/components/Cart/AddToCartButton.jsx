import React, {useState} from 'react';
import { commerce } from '../../lib/commerce';
import Button from '@material-ui/core/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToCartButton = (props) => {
const [addToCart, setAddToCart] = useState([]);


const handleAddToCart = () => {
    const productId = `${props.id}`;
    const qty = `${props.quantity}`;
    console.log(qty);
    try {
        commerce.cart.add(productId, qty).then((res) => {
            setAddToCart(res); 
            console.log(addToCart)
            })
            toast.success('Item added to cart!') 
    } catch(err) {
        toast.error('Something went wrong!')
        console.log("Error", err);
    }
}

    return (
        <div>
        <Button variant="contained" color="primary" onClick={handleAddToCart}>
        Add to cart
        </Button>
        <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        />
        </div>
    )
}

export default AddToCartButton
