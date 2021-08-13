import React, {useState, useEffect, useContext, useCallback} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { commerce } from './lib/commerce';
import { AppContext } from './context/AppContext';
import Loading from './components/Loading/Loading';
import Home from './components/Home/Home';
import Navbar from './components/Navigation/Navbar';
import Products from './components/Products/Products';
import Category from './components/Categories/Category';
import ProductPage from './components/Products/ProductPage';
import ShoppingCart from './components/Cart/ShoppingCart';
import SearchResults from './components/Search/SearchResults';
import CheckoutFormPage from './components/Checkout/CheckoutFormPage';
import { toast, ToastContainer } from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { loading, setLoading } = useContext(AppContext);
  const [searchResults, setSearchResults] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useState();
  const [cartTotal, setCartTotal] = useState();

  const getCartItems = useCallback(async () => {
    try {
        setLoading(true);
        await commerce.cart.retrieve().then((res) => {
            setLoading(false);
            setCartItem(res); 
            setCartTotal(res.total_items)
            })
    }
    catch(err) {
        console.log(err)
    }
  },[setLoading])

const handleRemoveItem = (itemId) => {
    setLoading(true);
    commerce.cart.remove(itemId).then(json => {
      setLoading(false);
      setCartItem(json.cart)
      setCartTotal(json.cart.totalItems)
    });
  }

  const handleAddToCart = (productId, qty) => {
        setLoading(true);
        commerce.cart.add(productId, qty).then(res => {
          setLoading(false);
          setCartItem(res.cart);
          setCartTotal(res.cart.totalItems);
        })
          toast.success('Item added to cart!');
          setQuantity(1); 
}


const handleCheckout = () => {
    setLoading(true);
    commerce.cart.empty().then(json => {
    setLoading(false);
    setCartItem(json.cart);
    setCartTotal(json.cart.totalItems);
  });
}

  useEffect(() => {
    getCartItems();
}, [getCartItems, quantity, cartTotal, setCartTotal])

  return (
    <div className="App">
      <Router>
        <Navbar setSearchResults={setSearchResults} totalItems={cartTotal} />
        <div className="loading">
        <Loading loading={loading} />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products}/>
          <Route path="/category/products/:id" exact component={Category}/>
          <Route path="/product/:id" exact>
            <ProductPage quantity={quantity} setQuantity={setQuantity} onAdd={handleAddToCart} />
          </Route>
          <Route path="/cart" exact>
            <ShoppingCart quantity={quantity} setQuantity=  {setQuantity} setCartItem={setCartItem} cartItem={cartItem} onRemove={handleRemoveItem} />
          </Route>
          <Route path="/results" exact>
            <SearchResults searchResults={searchResults} />
          </Route>
          <Route path="/checkout" exact>
            <CheckoutFormPage setCartTotal={setCartTotal} setCartItem={setCartItem} cartItem={cartItem} handleCheckout={handleCheckout} />
          </Route>
        </Switch>
      </Router>
      <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            />
    </div>
  );
}

export default App;
