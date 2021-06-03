import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navigation/Navbar'
import Products from './components/Products/Products';
import Category from './components/Categories/Category';
import ProductPage from './components/Products/ProductPage';
import ShoppingCart from './components/Cart/ShoppingCart';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products}/>
        <Route path="/category/products/:id" exact component={Category}/>
        <Route path="/product/:id" exact component={ProductPage}/>
        <Route path="/cart" exact component={ShoppingCart}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
