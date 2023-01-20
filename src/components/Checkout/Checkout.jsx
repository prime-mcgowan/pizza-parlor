/*
TODO:

1. Post to database
    - Find info to be sent
    - add to data
2. Conformination dialog - Are you sure?
3. Clear Cart (Array of pizzas to be ordered?)
4. Navigate back to first page, Home

*/

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Checkout () {
    const dispatch = useDispatch();
    const history = useHistory();
    
    // const checkoutPizza = useSelector(store => store.cartReducer);
    // const customerInfo = useSelector(store => store.customerInfoReducer[0]);

    const handleCheckout = event => {
        event.preventDefault();
    
        axios({
          method: 'POST',
          url: '/api/order',
          data: {
            customer_name: 'Malik',
            street_address: '101 lane N',
            city: 'San Francisco',
            zip: '553322',
            type: 'Delivery',
            total: 12.99,
            pizzas: [{
                id: '1',
                quantity: '1'
            }]
        }
        }).then((response) => {
            console.log(response)
            dispatch({
                type: 'UPDATE_ORDER_LIST'
            })
            dispatch({
                type: 'EMPTY_CART'
            })
            history.push('/menu')
         console.log(response)
        }).catch((err) => {
          console.error('handleSubmit fail:', err)
        })
      };

      return (
        <>
        <button onClick={handleCheckout}>
          Checkout
        </button>
        </>
      )

}

export default Checkout