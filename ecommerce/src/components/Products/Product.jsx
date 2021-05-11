import React from 'react';
import {Card, CardContent, CardMedia, Typography, StylesProvider } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Product = (props) => {
    return (
    <>
    <div className="product-card-container">
        <StylesProvider injectFirst>
          <Card variant="outlined" style={{border: 'none'}}>
                <CardMedia image={props.image}  title={props.name} />
                <CardContent className="product-info-container">
                    <Typography gutterBottom variant="p" component="p" className="product-card-text--title">
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="p" className="product-card-text--price">
                        {props.price.formatted_with_symbol}
                    </Typography>
                <div className="add-to-cart-container">
                    <AddShoppingCartIcon  className="add-to-cart-icon" />
                </div>
                </CardContent>
            </Card>  
            </StylesProvider>
         </div>
         </>
    )
}

export default Product;