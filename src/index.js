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
    return state;
}


const pizzaOrder = (state = [], action) => {
    return state;
}


const customerInfo = (state = [], action) => {
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
    pizzaMenu, pizzaOrder, customerInfo, customerOrder, orderCost
}), applyMiddleware(logger));


ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />, 
        </Provider>
    </React.StrictMode>
, document.getElementById('root'));
