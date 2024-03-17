//import dependencies
import React from 'react';

//import css
import './DeliveryDetails.css';

//import components
import DeliveryContainer from '../../../../components/containerTemplate/DeliveryContainer';
import Button from '../../../../components/selectBtn/Button';
import Select from '../../../../components/selectBtn/Select';

function DeliveryDetails(){
    return(
        <>
            <div className="delivery-details-layout">
                <div className="delivery-details-title pridi-medium-25 orange-text">Delivery & Personalization</div>

                <div className="delivery-details-box">
                    <DeliveryContainer />
                </div>

                <div className="delivery-details-content">
                    <div className="flex-col">
                        <div className="flex-row">
                            <label className="pridi-medium-15" for="size">Delivery Date</label>
                            <div className="spacer-5"></div>
                            <div className="asterisk-color pridi-medium-15">*</div>
                        </div>

                        <div className="br-2"></div>

                        <div className="select-box pridi-medium-12" 
                            style={{"width": "177px", "height": "39px", "position": "relative"}}
                            >
                            <div className="placeholder-text" style={{"position": "absolute", "left": "16px"}}>Select Date...</div>
                            <div className="spacer-25"></div>
                            <div className="order-select-size dropdown-box">
                                <Button />
                            </div>
                        </div>
                    </div>

                    <div className="spacer-20"></div>

                    <div className="flex-col">
                        <div className="flex-row">
                            <label className="pridi-medium-15" for="size">Mode of Delivery</label>
                            <div className="spacer-5"></div>
                            <div className="asterisk-color pridi-medium-15">*</div>
                        </div>

                        <div className="select-box pridi-medium-12" 
                            style={{"width": "186px", "height": "39px", "position": "relative"}}
                            >
                            <div className="placeholder-text" style={{"position": "absolute", "left": "16px"}}>Select Mode...</div>
                            <div className="spacer-25"></div>
                            <div className="order-select-size dropdown-box">
                                <Button />
                            </div>
                        </div>
                    </div>

                    <div className="spacer-15"></div>

                    <button type="button" className="edit-shipping-btn orange-btn pridi-medium-12 font-white">
                        Edit Shipping Address
                    </button>
                </div>

                <div className="br-15"></div>

                <div className="additional-box">
                    <div className="flex-col">
                        <div className="additional-text-title pridi-medium-15">Additional Requests <span className="optional-text">(Optional)</span></div>

                        <textarea className="additional-input" 
                                 placeholder="Type in additional requests to Mis’Cake regarding personalization, ingredients, packaging, delivery, and anything...">
                        </textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeliveryDetails;