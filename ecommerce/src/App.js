import React, {useState, useEffect} from 'react';
import './App.css';
import Product from './components/Products/Product';
import { commerce } from './lib/commerce';

const App = () => {
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
    <div className="product-cards">
    {products.map(product => (
        <Product key={product.id} name={product.name} image={product.media.source} {...product} />
      ))}
    </div>
    </>
  );
}

export default App;
