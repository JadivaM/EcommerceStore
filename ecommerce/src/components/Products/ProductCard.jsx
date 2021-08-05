import React from 'react';
import {Card, CardContent, CardMedia, Typography, StylesProvider} from '@material-ui/core';
import {Link} from 'react-router-dom';

const ProductCard = (props) => {
    return (
    <>
    <div className="product-card-container">
        <StylesProvider injectFirst>
          <Card className="product-card-image" variant="outlined" style={{border: 'none'}}>
                <CardMedia image={props.image}  title={props.name} />
                <CardContent className="product-info-container">
                    <Link to={`/product/${props.id}`} style={{color: '#000', textDecoration: 'none'}}>
                    <Typography gutterBottom variant="h6" component="p" className="product-card-text--title">
                        {props.name}
                    </Typography>
                    </Link>
                    <Typography gutterBottom variant="body1" component="p" className="product-card-text--price">
                        {props.price.formatted_with_symbol}
                    </Typography>
                </CardContent>
            </Card>  
            </StylesProvider>
         </div>
         </>
    )
}

export default ProductCard;