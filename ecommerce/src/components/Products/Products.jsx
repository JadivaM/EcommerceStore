import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
      try {
        commerce.products.list().then((res) => {
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
        <div>
        <div className="product-cards">
        {products.map(product => (
        <div>
        <ProductCard key={product.id} name={product.name} image={product.media.source} id={product.id} {...product} />
       </div>
        ))}  
         </div>
        </div>
        </>
    )
}

export default Products
