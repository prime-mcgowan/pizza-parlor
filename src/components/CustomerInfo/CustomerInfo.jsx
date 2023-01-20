import {  useDispatch } from 'react-redux';
import {  useState } from 'react';
import { useHistory } from 'react-router-dom';

import React from 'react';


function CustomerInfo() {

    const [name, setName] = useState('');
    const [street_address, setStreet_Address] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCustomerInfoSubmit = (event) => {
        event.preventDefault();
        
        // let data = {
        //         name: name, 
        //         street_address: street_address,
        //         city: city, 
        //         zip: zip,
        //         type: type
        // }

        // console.log(data);

        console.log(`Add a pizza`)

        // console.log(`Adding Pizza`, {name, street_address, city, zip});
        dispatch({
            type: 'CREATE_NEW_CUSTOMER',
            payload: {
                name: name, 
                street_address: street_address,
                city: city, 
                zip: zip,
                type: type
            }
        })
        
        setName('');
        setStreet_Address('');
        setCity('');
        setZip('')
        setType('')
    }

    return (
        <>
            <h2>Step 2: Customer Information</h2>
                <form onSubmit={handleCustomerInfoSubmit}
                onClick={() => {history.push('/customerInfo')}}>
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

                    <input
                    type="radio"
                    id="pick_up"
                    name="get_pizza_method"
                    value="Pick Up"
                    onChange={(event) => setType(event.target.value)}
                    />
                    <label htmlFor="pick_up">Pick-up</label>


                    <input
                    type="radio"
                    id="html"
                    name="get_pizza_method"
                    value="Delivery"
                    onChange={(event) => setType(event.target.value)}
                    />
                    <label htmlFor="delivery">Delivery</label> 
                    
                    <button type="submit" onClick={() => {history.push('/checkout')}}>
                        Proceed to Checkout
                    </button>
                </form>

                {/* customer sent on to checkout */}

        </>
    );//end of return 
}

export default CustomerInfo;