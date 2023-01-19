import React from 'react';
import { useSelector } from 'react-redux';

function Admin () {
  //get customerOrder reducer from Redux store
    const customerOrder = useSelector(store => store.customerOrder);

    return (
        <>
        <h3>Here are customer orders:</h3>
        <ul>
            {customerOrder.map((order) => {
            return <li key={order.id}> {order.customer_name} </li>})
            }
        </ul>
        </>
    )
}

export default Admin;