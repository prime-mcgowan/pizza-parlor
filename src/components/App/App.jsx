import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';

//import components
import PizzaMenu from '../PizzaMenu/PizzaMenu.jsx';
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
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
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <PizzaMenu fetchPizzaMenu={fetchPizzaMenu} />
      <CustomerInfo />
      <Checkout />
      <Admin />
    </div>
  );
}

export default App;
