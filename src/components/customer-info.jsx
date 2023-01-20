import {  useDispatch } from 'react-redux';
import {  useState } from 'react';

function CustomerInfo() {

    // const [newOrder, setNewOrder] = useState([]);

    const [name, setName] = useState('');
    const [street_address, setStreet_Address] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const dispatch = useDispatch();

    const handleCustomerInfoSubmit = (event) => {
        event.preventDefault();
        console.log(`Add a pizza`)
        // console.log(`Adding Pizza`, {name, street_address, city, zip});
        dispatch({
            type: 'CREATE_NEW_CUSTOMER',
            payload: {
                name: name, 
                street_address: street_address,
                city: city, 
                zip: zip
            }
        })
        setName('');
    }

    return (
        <>
            <h2>Step 2: Customer Information</h2>
                <form onSubmit={handleCustomerInfoSubmit}>
                    <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />

                    <input
                    type="text"
                    placeholder="Street Address"
                    value={street_address}
                    onChange={(event) => setStreet_Address(event.target.value)}
                    />

                    <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    />

                    <input
                    type="text"
                    placeholder="Zip"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)}
                    />

                    <button type="submit">Proceed to Checkout</button>

                </form>
                {/* customer sent on to checkout */}

        </>
    );//end of return 
}

export default CustomerInfo;