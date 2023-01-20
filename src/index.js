import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

//import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//reducers
const pizzaMenu = (state = [], action) => {
    switch (action.type) {
        case 'SET_PIZZAMENU':
          return action.payload; // 👈 action.payload evaulates to
                                 // the array of book objects we sent :)
        default:
          return state;
      }
}


const pizzaOrder = (state = [], action) => {
    if (action.type === 'SET_ORDER') {
        return [action.payload];
    }
    return state;
}


const customerInfo = (state = [], action) => {
    if (action.type === 'CREATE_NEW_CUSTOMER') {
        return action.payload;
    }
    return state;
}


const customerOrder = (state = [], action) => {
    if(action.type === 'SET_ORDERS') {
        return action.payload;
    }
    return state;
}

const orderCost = (state = [], action) => {
    return state;
}

//store
const reduxStore = createStore(combineReducers ({
    //reducers go here
    pizzaMenu, 
    pizzaOrder, 
    customerInfo, 
    customerOrder, 
    orderCost
}), applyMiddleware(logger));


ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />, 
        </Provider>
    </React.StrictMode>
, document.getElementById('root'));
