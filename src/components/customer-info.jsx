import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';



function CustomerInfo() {

    const [newOrder, setNewOrder] = useState([]);

    const dispatch = useDispatch();

    const handleCustomerInfoSubmit = event => {
        event.preventDefualt();
        dispatch({
            type: 'CREATE_NEW_CUSTOMER',
            payload: {
                name: newName, 
                street_address: newStreet_Address,
                city: newCity, 
                zip: newZip
            }
        })
//is this line needed:  setNewOrder('');
    }

    return (
        <>
            <h2>Step 2: Customer Information</h2>
                <form onSubmit={handleCustomerInfoSubmit}>
                    <input
                    type="text"
                    placeholder="Name"
                    value={newOrder}
                    onChange={(event) => setNewOrder(event.target.value)}
                    />

                    <input
                    type="text"
                    placeholder="Street Address"
                    value={newOrder}
                    onChange={(event) => setNewOrder(event.target.value)}
                    />

                    <input
                    type="text"
                    placeholder="City"
                    value={newOrder}
                    onChange={(event) => setNewOrder(event.target.value)}
                    />

                    <input
                    type="text"
                    placeholder="Zip"
                    value={newOrder}
                    onChange={(event) => setNewOrder(event.target.value)}
                    />
                </form>
                <button>Proceed to Checkout</button>
                {/* customer sent on to checkout */}

        </>
    );//end of return 
}

export default CustomerInfo;