import React, {useState, useEffect, useContext} from 'react';
import { commerce } from '../../lib/commerce';
import ProductCard from './ProductCard';
import { AppContext } from '../../context/AppContext';

const Products = () => {
    const { setLoading } = useContext(AppContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = () => {
        try {
          setLoading(true);
          commerce.products.list({'limit': 200}).then((res) => {
            setLoading(false);
            setProducts(res.data);
          })
        } catch(err) {
          console.log(err)
        }
      }
      fetchProducts();
    }, [setLoading]);
    
    return (
        <>
        <div className="products-category-info-container">
        <p className="products-category-title">all products</p>
        <p className="products-category-results">{products?.length} results</p>
        </div>
        <div className="product-cards">
        {products.map(product => (
        // <div>
        <ProductCard key={product.id} name={product.name} image={product.media.source} id={product.id} {...product} />
      //  </div>
        ))}  
         </div>
       
        </>
    )
}

export default Products
