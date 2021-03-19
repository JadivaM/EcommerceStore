import React from 'react';
import {Card, CardContent, CardMedia, Typography, StylesProvider } from '@material-ui/core';


const Product = (props) => {
    return (
    <>
    <div className="product-card-container">
        <StylesProvider injectFirst>
          <Card variant="outlined"
          className="product-card">
                <CardMedia className="product-card--image" image={props.image}  title={props.name} />
                <CardContent className="product-card-text">
                    <Typography gutterBottom variant="p" component="p" className="product-card-text--title">
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="p" className="product-card-text--price">
                        {props.price.formatted_with_symbol}
                    </Typography>
                </CardContent>
            </Card>  
            </StylesProvider>
         </div>
         </>
    )
}

export default Product;