import React from 'react';
import {Divider, IconButton} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { commerce } from '../../lib/commerce';

const CartProducts = (props) => {

    const handleRemoveItem = () => {
        try {
            commerce.cart.remove(`${props.id}`).then(json => console.log(json));
        } catch (err) {
            console.log(err)
        }
    }

    const addQuantity = () => {
        try {
        commerce.cart.update(`${props.id}`, { quantity: (Number(`${props.quantity}`) + 1) }).then((res) => {
            console.log(res)
            })
    } catch (err) {
        console.log(err)
    }
    }

    
     
    
       


       
            const subtractQuantity = () => {
                try{
                commerce.cart.update(`${props.id}`, { quantity: (Number(`${props.quantity}`) - 1) }).then((res) => {
                    console.log(res)
                    })
            } catch (err) {
                console.log(err)
            }
             }
    

    return (
        <>
        <div className="shopping-cart-products-main-container">
        <Divider id="shopping-cart-item-divider"/> 
        <div className="shopping-cart-items-container">
            <img style={{width: 150, height: 150, objectFit: 'cover'}}src={props.image} alt={props.name}/>
            <div className="shopping-cart-items-column">
            <p>{props.name}</p>
            </div>
            <div className="shopping-cart-items-column">
            <IconButton><RemoveIcon onClick={subtractQuantity} /> </IconButton>
            <p>Quantity: {props.quantity}</p>
            <IconButton><AddIcon onClick={addQuantity} /></IconButton>
            </div>
            <div className="shopping-cart-items-column">
            <p>{props.price}</p>
            </div>
            <div className="shopping-cart-items-button-column">
            <IconButton>
            <ClearIcon onClick={handleRemoveItem} />
            </IconButton>
            </div>
        </div> 
        </div>
        </>
    )
}

export default CartProducts
