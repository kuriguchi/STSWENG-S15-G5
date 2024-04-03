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
    const productName = "Carrot Cake";

    const [inputs, setInputs] = useState({
        pname: productName,
        orderNum: '',
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        /** For Faster Input and Access to API */
        const sampleForm = {
            orderedProduct: productName,
            orderNum: '12345',
            fname: 'Sample First Name',
            lname: 'Sample Last Name',
            contactNo: 'Sample Contact',
            email: 'sample@email.com',
            addr1: 'Sample Address 1',
            addr2: 'Sample Address 2',
            city: 'Sample City',
            province: 'Sample State',
            size: 'Sample Size',
            qty: 0,
            datePickup: 'Sample Date',
            mode: 'Store Pick-Up',
            additional: 'None'
        };

        const orderForm = {
            orderedProduct: productName,
            orderNum: '12345',
            fname: inputs.fname,
            lname: inputs.lname,
            contactNo: inputs.conum,
            email: inputs.email,
            addr1: inputs.address1,
            addr2: inputs.address2,
            city: inputs.city,
            province: inputs.state,
            size: inputs.size,
            qty: inputs.qty,
            datePickup: inputs.deliveryDate,
            mode: inputs.mode,
            additional: inputs.additional
        }

        fetch("http://localhost:4000/postOrder", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sampleForm)
        })

            .then((res) => {
                if(res.ok){
                    console.log('One Document Inserted.');
                } else {
                    console.error('Insert Document Failed.');
                }
            })

            .catch((err) => {
                console.error('Error: ', error);
            });
    }

    return(
        <>
            <div className="product-order-form">
                <div className="order-form-title">Product Order Form</div>
                <form onSubmit={handleSubmit}>
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