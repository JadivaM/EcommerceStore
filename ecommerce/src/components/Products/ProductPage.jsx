import React, {useState, useEffect, useContext} from 'react';
import { commerce } from '../../lib/commerce';
import { useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import AddToCartButton from '../Cart/AddToCartButton';
import RelatedProducts from './RelatedProducts';
import {Typography } from '@material-ui/core';
import { AppContext } from '../../context/AppContext';


const ProductPage = ({setQuantity, quantity, onAdd}) => {
    const { setLoading } = useContext(AppContext);
    const [productInfo, setProductInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = () => {
            try {
                setLoading(true);
                commerce.products.retrieve(`${id}`).then((res) => {
                    setLoading(false);
                    setProductInfo(res); 
                    console.log(res)
                    })
            }
            catch(err) {
                console.log(err)
            }
        }
        getProduct()
    }, [id])

    const handleQuantityChange = (e) => {
        try{
            setQuantity(e.target.value);
        } catch(err) {
            console.log(err)
        }
      };

    

    return (
        <>
        <div className="product-info-main-container">
            <div className="product-info-first-column">
            <img className="product-info-image" src={productInfo?.media?.source} alt={productInfo?.name} />
            </div>
            <div className="product-info-second-column">
            <p className="product-info-name">{productInfo?.name}</p>
            <p className="product-info-price">{productInfo?.price.formatted_with_symbol}</p>
            <div className="reviews-container">
            <Rating size="small" name="read-only" value={null} readOnly />
            <p className="no-reviews-text">No reviews yet</p>
            </div>
            <select
              className="quantity-dropdown"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <AddToCartButton key={productInfo?.id} productInfo={productInfo} quantity={quantity} onAdd={onAdd}/>
            <p className="product-info-free-shipping">Free shipping over $39</p>
            <div className="product-page-details">
            <p className="product-page-details-text">Details</p>
            <Typography dangerouslySetInnerHTML={{ __html: productInfo?.description }} variant="body" component="p" />
            </div>
            </div>
        </div>
        <div className="product-page-related-products-section">
        <p className="related-products-header">You may also like</p>
        <div className="product-info-third-column">
            {productInfo?.related_products?.map(relatedProduct => (
            <RelatedProducts key={relatedProduct.id} image={relatedProduct.media.source} name={relatedProduct.name} id={relatedProduct.id} price={relatedProduct.price.formatted_with_symbol} />
            ))}
            </div>
            </div>
        </>
    )
}

export default ProductPage
