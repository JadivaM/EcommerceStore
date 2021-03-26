import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce';
import Product from './Product';
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
        <Product key={product.id} name={product.name} image={product.media.source} {...product} />
        ))}  
        </div>
        </div>
        </>
    )
}

export default Products
