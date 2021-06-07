import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import { useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import AddToCartButton from '../Cart/AddToCartButton';
import RelatedProducts from './RelatedProducts';

const ProductPage = ({setQuantity, quantity}) => {
    const [productInfo, setProductInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = () => {
            try {
                commerce.products.retrieve(`${id}`).then((res) => {
                    setProductInfo(res); 
                    console.log(res.variant_groups)
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
            <p>{productInfo?.variant_groups?.name}</p>
            <div>
                {productInfo?.variant_groups?.options?.map((option) => {
                    <p>{option.name}</p>
                })}
            </div>
            <p className="product-info-desc">{productInfo?.description}</p>
            <select
              className="quantity-dropdown"
              name="quantity"
              value={quantity.value}
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
            <p className="product-info-free-shipping">Free shipping over $39</p>
            <AddToCartButton key={productInfo?.id} id={productInfo?.id} quantity={quantity}icon={`${"Add to cart"}`} color={"primary"}/>
            </div>
            <div className="product-info-third-column">
            <p className="related-products-header">You may also like</p>
            {productInfo?.related_products?.map(relatedProduct => (
            <RelatedProducts key={relatedProduct.id} image={relatedProduct.media.source} name={relatedProduct.name} id={relatedProduct.id} price={relatedProduct.price.formatted_with_symbol}/>
            ))}
            </div>

        </div>
        </>
    )
}

export default ProductPage
