import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Admin () {
  //get customerOrder reducer from Redux store
    const customerOrder = useSelector(store => store.customerOrder);

  //declare dispatch object
    const dispatch = useDispatch();

    return (
        <>
        <ul>
            {customerOrder.map((order) => 
            <li key={order.key}>
                {order.customer_name} at {order.street_address}
                </li>)}
        </ul>
        </>
    )
}