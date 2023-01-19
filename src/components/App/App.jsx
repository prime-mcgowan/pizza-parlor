import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  //get customerOrder reducer from Redux store
  const customerOrder = useSelector(store => store.customerOrder);

  //declare dispatch object
  const dispatch = useDispatch();

  //function to http request get customerOrders
  const getCustomerOrders = () => {
    axios.get('/api/order')
    .then((res) => {
      dispatch({
        type: 'SET_ORDERS',
        payload: res.data
      })
      .catch((err) => {
        console.log('GET /order request failed', err)
      })
    })
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      
    </div>
  );
}

export default App;
