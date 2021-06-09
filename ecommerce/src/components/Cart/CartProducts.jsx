import React, {useState} from 'react';
import {Divider, IconButton} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import { commerce } from '../../lib/commerce';

const CartProducts = ({ item, setQuantity, onRemove}) => {
    const [updateQuantity, setUpdateQuantity] = useState(item.quantity);

    const handleRemoveItem = (itemId) => onRemove(itemId);

    const handleQuantityChange = (e) => {
        try{
            setUpdateQuantity(e.target.value);
            console.log(e.target.value);
        } catch(err) {
            console.log(err)
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        commerce.cart.update(item.id, { quantity: `${updateQuantity}` }).then(response => {
            setQuantity(response.quantity);
        });
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
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleQuantityChange} defaultValue={item.quantity} />
            <Button type="submit">Update</Button>
            </form>
            </div>
            <div className="shopping-cart-items-column">
            <p>{item.price.formatted_with_symbol}</p>
            </div>
            <div className="shopping-cart-items-button-column">
            <IconButton>
            <ClearIcon onClick={() => handleRemoveItem(item.id)} />
            </IconButton>
            </div>
        </div> 
        </div>
        </>
    )
}

export default CartProducts
