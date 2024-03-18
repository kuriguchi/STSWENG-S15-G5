//import dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import $ from 'jquery';

//import css
import './OrderForm.css';

//import components
import CustomerInfo from '../orderform/components/CustomerInfo';
import OrderDetails from '../orderform/components/OrderDetails';
import DeliveryDetails from '../orderform/components/DeliveryDetails';

function OrderForm(){
    const [inputs, setInputs] = useState({
        fname: '',
        lname: '',
        conum: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        size: '',
        qty: '',
        deliveryDate: '',
        mode: '',
        additional: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSelectChange = (name, value) => {
        setInputs({ ...inputs, [name]: value})
    }

    useEffect(() => {
        console.log(inputs);
    });

    return(
        <>
            <div className="product-order-form">
                <div className="order-form-title">Product Order Form</div>
                <form>
                    <div className="flex-row">
                        <CustomerInfo {...{onChange: handleChange, form: inputs, onSelectChange: handleSelectChange}} />

                        <div className="spacer-40"></div>

                        <div className="order-delivery-box">
                            <OrderDetails {...{onChange: handleChange, form: inputs, onSelectChange: handleSelectChange}} />
                            <div style={{height: "42px"}}></div>
                            <DeliveryDetails {...{onChange: handleChange, form: inputs, onSelectChange: handleSelectChange}} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default OrderForm;