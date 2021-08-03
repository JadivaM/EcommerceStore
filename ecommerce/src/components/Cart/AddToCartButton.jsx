import React from 'react';

const AddToCartButton = ({productInfo, onAdd, quantity}) => {

    const handleAddToCart = (productId, qty) => {onAdd(productId, qty)};

    return (
        <div>
            <button onClick={() => handleAddToCart(productInfo.id, quantity)} className="product-page-add-to-cart-btn">Add to cart</button>
        </div>
    )
}

export default AddToCartButton
