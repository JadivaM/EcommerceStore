import React, {useState, useEffect} from 'react';
import {Divider, IconButton} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { commerce } from '../../lib/commerce';
import { toast } from 'react-toastify';

const CartProducts = ({ item, setQuantity, onRemove}) => {
    const [updateQuantity, setUpdateQuantity] = useState(item.quantity);

    const handleRemoveItem = (itemId) => onRemove(itemId);

    const handleQuantityChange = (e) => {
        try{
            setUpdateQuantity(e.target.value);
        } catch(err) {
            console.log(err)
        }
      };
    
    const updateCartQuantity = () => {
        commerce.cart.update(item.id, { quantity: `${updateQuantity}` }).then(response => {
            setQuantity(response.quantity);
        }).catch(error => {
            toast.error('Error, refresh the page and try again.')
        });
    }

    useEffect(() => {
        updateCartQuantity();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCartQuantity();
    };

    return (
        <>
        <div className="shopping-cart-products-main-container">
        <Divider id="shopping-cart-item-divider"/> 
        <div className="shopping-cart-items-container">
            <img style={{width: 150, height: 150, objectFit: 'cover'}} src={item.media.source} alt={item.name}/>
            <div className="shopping-cart-items-column">
            <p>{item.name}</p>
            </div>
            <div className="shopping-cart-items-column">
            <p>Quantity:</p>
            <form className="cart-quanity-info-row" onSubmit={handleSubmit}>
            <input type="text" onChange={handleQuantityChange} defaultValue={item.quantity} className="cart-quantity-input"/>
            <button className="cart-update-quantity-button" type="submit">Update</button>
            </form>
            </div>
            <div className="shopping-cart-items-column">
            <p>{item.price.formatted_with_symbol}</p>
            </div>
            <div className="shopping-cart-items-button-column">
            <IconButton onClick={() => handleRemoveItem(item.id)}>
            <ClearIcon />
            </IconButton>
            </div>
        </div> 
        </div>
        </>
    )
}

export default CartProducts
