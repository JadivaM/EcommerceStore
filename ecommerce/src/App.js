import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navigation/Navbar'
import Products from './components/Products/Products';
import Category from './components/Categories/Category';
import ProductPage from './components/Products/ProductPage';
import ShoppingCart from './components/Cart/ShoppingCart';
import SearchResults from './components/Search/SearchResults';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
    <Router>
      <Navbar setSearchResults={setSearchResults} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products}/>
        <Route path="/category/products/:id" exact component={Category}/>
        <Route path="/product/:id" exact component={ProductPage}/>
        <Route path="/cart" exact component={ShoppingCart}/>
        <Route path="/results" exact>
          <SearchResults searchResults={searchResults} />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
