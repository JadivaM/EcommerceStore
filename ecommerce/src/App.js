import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
const [products, setProducts] = useState([])
const fetchProducts = () => {
  commerce.products.list().then((products) => {
    setProducts(products);
  }).catch((err) => {
    console.log(err)
  });

  useEffect(() => {
    fetchProducts();
  }, [])
}

  return (
    <>
    <div>
    </div>
    </>
  );
}

export default App;
