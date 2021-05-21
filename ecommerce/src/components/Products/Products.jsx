import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import ProductCard from './ProductCard';
import Navbar from '../Navigation/Navbar';

const Products = () => {
    const [products, setProducts] = useState([])

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
        <Navbar />
        <div className="product-cards">
        {products.map(product => (
        <ProductCard key={product.id} name={product.name} image={product.media.source} id={product.id} {...product} />
        ))}  
        </div>
        </div>
        </>
    )
}

export default Products
