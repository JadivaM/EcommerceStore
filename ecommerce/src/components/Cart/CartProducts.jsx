import React, {useState, useEffect, useCallback} from 'react';
import {Divider, IconButton} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { commerce } from '../../lib/commerce';
import { toast } from 'react-toastify';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const CartProducts = ({ item, setQuantity, onRemove}) => {
    const [updateQuantity, setUpdateQuantity] = useState(item.quantity);

    const handleRemoveItem = (itemId) => onRemove(itemId);

    const handleIncrementQuantity = (e) => {
        try{
            setUpdateQuantity(parseFloat(updateQuantity) + 1);
        } catch(err) {
            console.log(err)
        }
      };
      
      const handleDecrementQuantity = (e) => {
        try{
            setUpdateQuantity(parseFloat(updateQuantity) - 1);
        } catch(err) {
            console.log(err)
        }
      };

    const updateCartQuantity = useCallback(() => {
        commerce.cart.update(item.id, { quantity: `${updateQuantity}` }).then(response => {
            setQuantity(response.quantity);
        }).catch(error => {
            toast.error('Error, refresh the page and try again.')
        });
    }, [updateQuantity, item.id, setQuantity])

    useEffect(() => {
        updateCartQuantity();
    }, [updateCartQuantity])


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
            <div className="cart-quanity-info-row">
            <button className="cart-update-quantity-button" onClick={handleDecrementQuantity}>
                <RemoveIcon />
            </button>
            <p className="cart-quantity-input">{item.quantity}</p>
            <button className="cart-update-quantity-button" onClick={handleIncrementQuantity}>
                <AddIcon />
            </button>
            </div>
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
