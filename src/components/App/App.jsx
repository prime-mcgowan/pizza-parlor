import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//import components
import PizzaMenu from '../PizzaMenu/PizzaMenu.jsx';
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../customer-info';
import Admin from '../Admin/Admin.jsx';

function App() {
  //declare dispatch object
  const dispatch = useDispatch();

  //declare useEffect
  useEffect(() => {
    getCustomerOrders();
  })

  //function to http request get customerOrders
  const getCustomerOrders = () => {
    axios.get('/api/order')
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: 'SET_ORDERS',
        payload: res.data
      })
      })
      .catch((err) => {
        console.log('GET /order request failed', err)
      })
  }


  const fetchPizzaMenu = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      console.log(response);
      dispatch({
        type: 'SET_PIZZAMENU',
        payload: response.data // 👈 this is array of pizza objects!
      })
    }).catch((err) => {
      console.error('BookList useEffect fail:', err)
    })
  }
  
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        <nav>
            <h4>Navbar</h4>
                <ul>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/customerInfo">Customer Information</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
          </nav>
        <Route exact path="/menu"> 
          <PizzaMenu fetchPizzaMenu={fetchPizzaMenu} />
        </Route>
        <Route exact path="/customerInfo">
          <CustomerInfo />
        </Route>
        <Route exact path=" ">
          <Checkout />
        </Route>
        <Route exact path="/Admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
