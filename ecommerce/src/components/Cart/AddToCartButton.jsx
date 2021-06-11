import React, {useState} from 'react';
import { commerce } from '../../lib/commerce';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToCartButton = ({productInfo, onAdd, quantity}) => {

    const handleAddToCart = (productId, qty) => onAdd(productId, qty);

// const [addToCart, setAddToCart] = useState([]);


// const handleAddToCart = () => {
//     const productId = `${props.id}`;
//     const qty = `${props.quantity}`;
//     console.log(qty);
//     try {
//         commerce.cart.add(productId, qty).then((res) => {
//             setAddToCart(res); 
//             console.log(addToCart)
//             })
//             toast.success('Item added to cart!') 
//     } catch(err) {
//         toast.error('Something went wrong!')
//         console.log("Error", err);
//     }
// }

    return (
        <div>
            <button onClick={() => handleAddToCart(productInfo.id, quantity)} className="product-page-add-to-cart-btn">Add to cart</button>
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
