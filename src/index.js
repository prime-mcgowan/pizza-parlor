import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';





//import redux
import { createStore, combineReducers } from 'redux';
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
    return state;
}


const customerInfo = (state = [], action) => {
    return state;
}


const customerOrder = (state = [], action) => {
    return state;
}

const orderCost = (state = [], action) => {
    return state;
}
   

//store
const reduxStore = createStore(combineReducers ({
    //reducers go here
    pizzaMenu
}),
    // applyMiddleware(logger)
);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App /> 
        </Provider>
    </React.StrictMode>
,document.getElementById('root'));



