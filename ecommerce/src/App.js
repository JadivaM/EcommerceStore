import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { commerce } from './lib/commerce';
import Home from './components/Home/Home';
import Navbar from './components/Navigation/Navbar'
import Products from './components/Products/Products';
import Category from './components/Categories/Category';
import ProductPage from './components/Products/ProductPage';
import ShoppingCart from './components/Cart/ShoppingCart';
import SearchResults from './components/Search/SearchResults';
import CheckoutFormPage from './components/Checkout/CheckoutFormPage';
import { toast } from 'react-toastify';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useState();
  const [cartTotal, setCartTotal] = useState();

  const getCartItems = async () => {
    try {
        await commerce.cart.retrieve().then((res) => {
            setCartItem(res); 
            setCartTotal(res.total_items)
            console.log(cartTotal);
            })
    }
    catch(err) {
        console.log(err)
    }
}

const handleRemoveItem = (itemId) => {
    commerce.cart.remove(itemId).then(json => setCartItem(json.cart));
  }



  const handleAddToCart = (productId, qty) => {
        commerce.cart.add(productId, qty).then(res => {
          setCartItem(res.cart)
          setCartTotal(res.cart.totalItems)})
          toast.success('Item added to cart!') 
}

  useEffect(() => {
    getCartItems();
}, [quantity, cartTotal, setCartTotal])

  return (
    <>
    <Router>
      <Navbar setSearchResults={setSearchResults} totalItems={cartTotal} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products}/>
        <Route path="/category/products/:id" exact component={Category}/>
        <Route path="/product/:id" exact>
        <ProductPage quantity={quantity} setQuantity={setQuantity} onAdd={handleAddToCart} />
        </Route>
        <Route path="/cart" exact>
          <ShoppingCart quantity={quantity} setQuantity={setQuantity} setCartItem={setCartItem} cartItem={cartItem} onRemove={handleRemoveItem}/>
        </Route>
        <Route path="/results" exact>
          <SearchResults searchResults={searchResults} />
        </Route>
        <Route path="/checkout" exact>
          <CheckoutFormPage cartItem={cartItem} />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
