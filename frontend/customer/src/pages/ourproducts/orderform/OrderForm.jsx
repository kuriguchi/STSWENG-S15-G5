//import dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import $ from 'jquery';

//import css
import './OrderForm.css';

//import components
import CustomerInfo from '../orderform/components/CustomerInfo';
import OrderDetails from '../orderform/components/OrderDetails';
import DeliveryDetails from '../orderform/components/DeliveryDetails';

function OrderForm(){
    const [product, setProduct] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const productID = location.pathname
        .split('/')
        .filter((x) => x)
        .pop();

    const [inputs, setInputs] = useState({
        pname: product.name,
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
    };

    const handleDateChange = (e) => {
        const date = e.target.value;
        setInputs({...inputs, [deliveryDate]: date});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        const orderForm = {
            orderedProduct: product.name,
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

        fetch("https://miscake-api.vercel.app/postOrder", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderForm)
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

        // navigate('/');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetch(`https://miscake-api.vercel.app/getProduct/${productID}`)
            .then(res => {
                if(!res.ok){
                    throw new Error('Error Getting Product.');
                }

                return res.json();
            })

            .then(data => {
                setProduct(data);
                setImgPath(data.img);
                console.log('Successfully retrieved product.');
            })

            .catch(error => {
                console.error('Error: ', error);
            });
    }, []);


    return(
        <>
            <div className="product-order-form">
                <div className="order-form-title">Product Order Form</div>
                <form onSubmit={handleSubmit}>
                    <div className="flex-row">
                        <CustomerInfo {...{onChange: handleChange, form: inputs, onSelectChange: handleSelectChange}} />

                        <div className="spacer-40"></div>

                        <div className="order-delivery-box">
                            <OrderDetails {...{onChange: handleChange, form: inputs, onSelectChange: handleSelectChange, product: product}} />
                            <div style={{height: "42px"}}></div>
                            <DeliveryDetails {...{onChange: handleChange, form: inputs, onSelectChange: handleSelectChange, onDateChange: handleDateChange}} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default OrderForm;