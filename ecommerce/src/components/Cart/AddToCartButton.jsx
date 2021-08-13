import React from 'react';
import { toast } from 'react-toastify';


const AddToCartButton = ({productInfo, onAdd, quantity}) => {

    const handleAddToCart = (productId, qty) =>  {
    try {
        onAdd(productId, qty)
      } catch(err) {
        toast.error('Error, refresh the page and try again.')
      }
    }

    return (
        <div>
            <button onClick={() => handleAddToCart(productInfo.id, quantity)} className="product-page-add-to-cart-btn">Add to cart</button>
        </div>
    )
}

export default AddToCartButton
