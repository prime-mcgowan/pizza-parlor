import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux'
import PizzaMenu from '../PizzaMenu/PizzaMenu.jsx';



function App() {
  const dispatch = useDispatch();

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
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <PizzaMenu fetchPizzaMenu={fetchPizzaMenu} />
    </div>
  );
}

export default App;
