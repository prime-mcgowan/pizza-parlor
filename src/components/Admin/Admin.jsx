import React from 'react';
import { useSelector } from 'react-redux';

//import component
import HeaderRow from './HeaderRow.jsx';
import OrderDetails from './OrderDetails.jsx';

function Admin () {
  //get customerOrder reducer from Redux store
    const customerOrder = useSelector(store => store.customerOrder);

    return (
        <>
        <h3>Here are customer orders:</h3>
        <table>
            <thead>
                <HeaderRow />
            </thead>
            <tbody>
            {customerOrder.map((order) => {
            return <tr key={order.id}><OrderDetails order={order}/></tr>})
            }
            </tbody>
        </table>
        </>
    )
}

export default Admin;