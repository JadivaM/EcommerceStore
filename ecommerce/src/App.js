import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';

const App = () => {

  

  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
