import React from 'react';
import CartProducts from './CartProducts';
import CartTotal from '../Cart/CartTotal';

const ShoppingCart = ({setQuantity, quantity, cartItem, onRemove}) => {

    

    return (
        <div>
            <h1 className="cart-title">Shopping cart</h1>
            {cartItem ? 
            (<div className="shopping-cart-info-container">
            {cartItem?.line_items?.map((item) => (
            <div className="cart-product-info-container">
            <CartProducts key={item.id} item={item} quantity={quantity} setQuantity={setQuantity} onRemove={onRemove} />
            </div>
            ))} 
            <div className="cart-total-container">
            <CartTotal key={cartItem?.id} subtotal={cartItem.subtotal.formatted_with_symbol} items={cartItem.total_items} />
            </div>
            </div>)
            : <p>Cart is empty</p>}
            
           
        </div>
    )
}

export default ShoppingCart;