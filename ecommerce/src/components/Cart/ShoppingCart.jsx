import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import CartProducts from './CartProducts';
import Navbar from '../Navigation/Navbar';
import CartTotal from '../Cart/CartTotal';

const ShoppingCart = () => {
    const [cartItem, setCartItem] = useState();

    const getCartItems = () => {
        try {
            commerce.cart.retrieve().then((res) => {
                setCartItem(res); 
                console.log(res);
                })
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCartItems();
    }, [])

    return (
        <div>
            <Navbar />
            <p>cart</p>
            {cartItem ? 
            (<div className="shopping-cart-info-container">
            {cartItem.line_items.map(item => (
            <CartProducts key={item.id} name={item.name} quantity={item.quantity} price={item.price.formatted_with_symbol} image={item.media.source}/>
            ))} 
            <CartTotal key={cartItem?.id} subtotal={cartItem.subtotal.formatted_with_symbol} items={cartItem.total_items} />
            </div>)
            : <p>Cart is empty</p>}
            
           
        </div>
    )
}

export default ShoppingCart;