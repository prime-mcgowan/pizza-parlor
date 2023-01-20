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
    const pizzaOrder = useSelector(store => store.pizzaOrder);
    const customerInfo = useSelector(store => store.customerInfo);
    const totalCost = useSelector(store => store.orderCost);

    const handleCheckout = event => {
        event.preventDefault();
    
        axios({
          method: 'POST',
          url: '/api/order',
          data: {
            customer_name: customerInfo.name,
            street_address: customerInfo.street_address,
            city: customerInfo.city,
            zip: customerInfo.zip,
            type: customerInfo.type,
            total: totalCost,
            pizzas: pizzaOrder
        }
        }).then((response) => {
            console.log(response)
        }).catch((err) => {
          console.error('handleSubmit fail:', err)
        })

        history.push('/menu');
      };

      return (
        <>
        <h1>Prime Pizza</h1>
        <h3>Step 3: Checkout</h3>
            <p>{customerInfo.name}</p>
            <p>{customerInfo.street_address}</p>
            <p>{customerInfo.city}, {customerInfo.zip}</p>
            <table>
                <thead>
                    <tr>
                        <th>Customer Name: {customerInfo.name}</th>
                        <th>Cost: {totalCost}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{customerInfo.name}</td>
                    </tr>
                </tbody>
            </table>
            <h2>Total: ${totalCost}</h2>
            <button onClick={handleCheckout}>Checkout</button>
        </>
      )

}

export default Checkout