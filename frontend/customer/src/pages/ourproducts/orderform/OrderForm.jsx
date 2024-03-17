//import dependencies
import React from 'react';

//import css
import './OrderForm.css';

//import components
import CustomerInfo from '../orderform/components/CustomerInfo';
import OrderDetails from '../orderform/components/OrderDetails';
import DeliveryDetails from '../orderform/components/DeliveryDetails';

function OrderForm(){
    return(
        <>
            <div className="product-order-form">
                <div className="order-form-title">Product Order Form</div>

                <div className="flex-row">
                    <CustomerInfo />

                    <div className="spacer-40"></div>

                    <div className="order-delivery-box">
                        <OrderDetails />
                        <div style={{height: "42px"}}></div>
                        <DeliveryDetails />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderForm;