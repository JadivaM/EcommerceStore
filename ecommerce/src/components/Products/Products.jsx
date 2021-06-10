import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
      try {
        commerce.products.list({'limit': 200}).then((res) => {
          setProducts(res.data);
          console.log(res.data);
        })
      } catch(err) {
        console.log(err)
      }
    }


    useEffect(() => {
      fetchProducts();
    }, []);
    
    return (
        <>
          <div className="products-category-info-container">
        <p className="products-category-title">all products</p>
        <p className="products-category-results">{products?.length} results</p>
        </div>
        <div className="product-cards">
        {products.map(product => (
        <div>
        <ProductCard key={product.id} name={product.name} image={product.media.source} id={product.id} {...product} />
       </div>
        ))}  
         </div>
       
        </>
    )
}

export default Products
