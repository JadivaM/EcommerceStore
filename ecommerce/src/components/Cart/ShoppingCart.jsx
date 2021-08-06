import React from 'react';
import CartProducts from './CartProducts';
import CartTotal from '../Cart/CartTotal';

const ShoppingCart = ({setQuantity, quantity, cartItem, onRemove}) => {

    return (
        <div>
            <h1 className="cart-title">Shopping cart</h1>
            {!cartItem || cartItem.line_items.length === 0 ? 
            <p className="cart-is-empty-text">Cart is empty :(</p>
            :
            (<div className="shopping-cart-info-container">
                <div className="cart-product-info-container">
                    {cartItem?.line_items?.map((item) => (
                    <CartProducts key={item.id} item={item} quantity={quantity} setQuantity={setQuantity} onRemove={onRemove} />
            ))} 
                </div>
            <div className="cart-total-container">
            <CartTotal key={cartItem.id} subtotal={cartItem.subtotal.formatted_with_symbol} items={cartItem.total_items} />
            </div>
            </div>)}
        </div>
    )
}

export default ShoppingCart;