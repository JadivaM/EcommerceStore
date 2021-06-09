import React from 'react';
import {Card, CardContent, CardMedia, Typography, StylesProvider} from '@material-ui/core';
import AddToCartButton from '../Cart/AddToCartButton';
import {Link} from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ProductCard = (props) => {
    return (
    <>
    <div className="product-card-container">
        <StylesProvider injectFirst>
          <Card className="product-card-image" variant="outlined" style={{border: 'none'}}>
                <CardMedia image={props.image}  title={props.name} />
                <CardContent className="product-info-container">
                    <Link to={`/product/${props.id}`}>
                    <Typography gutterBottom variant="p" component="p" className="product-card-text--title">
                        {props.name}
                    </Typography>
                    </Link>
                    <Typography gutterBottom variant="p" component="p" className="product-card-text--price">
                        {props.price.formatted_with_symbol}
                    </Typography>
                <div className="add-to-cart-container">
                    <AddToCartButton id={props.id} quantity={1} icon={<AddShoppingCartIcon className="shopping-basket-icon"/>} color={"default"}/>
                </div>
                </CardContent>
            </Card>  
            </StylesProvider>
         </div>
         </>
    )
}

export default ProductCard;