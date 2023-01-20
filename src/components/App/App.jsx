import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
//import components
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

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <CustomerInfo />
      <Checkout />
      <Admin />
    </div>
  );
}

export default App;
