//import dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import $ from 'jquery';

//import css
import './DeliveryDetails.css';
import 'react-calendar/dist/Calendar.css';

//import components
import DeliveryContainer from '../../../../components/containerTemplate/DeliveryContainer';
import Button from '../../../../components/selectBtn/Button';
import Select from '../../../../components/selectBtn/Select';

function DeliveryDetails(props){

    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [isModeVisible, setIsModeVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [currMode, setCurrMode] = useState('');

    const modes = {
        pickup: 'Store Pick-Up',
        lalamove: 'Lalamove',
        grab: 'Grab',
        client: 'Client'
    }

    const toggleCalendar = (event) => {
        setIsCalendarVisible(!isCalendarVisible);
        props.onSelectChange("deliveryDate", date);
    };

    const toggleMode = (event) => {
        setIsModeVisible(!isModeVisible);
    };

    const handleModeChange = (item) => {
        setCurrMode(item);
        props.onSelectChange("mode", item);

        $("#selectMode").css("color", "black");
    };



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
                            <div className="placeholder-text" style={{"position": "absolute", "left": "16px", "color": "black"}}>{date.toDateString() || "Select Date..."}</div>
                            <div className="spacer-25"></div>
                            <div className="order-select-size dropdown-box">
                                <Button onClick={toggleCalendar}/>
                            </div>
                        </div>

                        {isCalendarVisible ? (
                            <div className="calendar-container" onClick={toggleCalendar}>
                                <Calendar onChange={setDate} value={date}  />   
                            </div>
                        ) : null}

                    </div>

                    <div className="spacer-20"></div>

                    <div className="flex-col" style={{position: "relative", bottom: "-6px"}}>
                        <div className="flex-row">
                            <label className="pridi-medium-15" for="size">Mode of Delivery</label>
                            <div className="spacer-5"></div>
                            <div className="asterisk-color pridi-medium-15">*</div>
                        </div>

                        <div className="select-box pridi-medium-12" 
                            style={{"width": "167px", "height": "39px", "position": "relative"}}
                            >
                            <div id="selectMode" className="placeholder-text" style={{"position": "absolute", "left": "16px"}}>{currMode || "Select Mode..."}</div>
                            <div className="spacer-25"></div>
                            <div className="order-select-size dropdown-box">
                                <Button onClick={toggleMode} />
                            </div>
                        </div>
                        
                        <div className="br-10"></div>
                        <Select {...{isVisible: isModeVisible, height: "60px", width: "167px", list: modes, handleChange: handleModeChange, toggleVisibility: toggleMode}} />
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
                                  placeholder="Type in additional requests to Mis’Cake regarding personalization, ingredients, packaging, delivery, and anything..."
                                  name="additional"
                                  value={props.form.additional || ""}
                                  onChange={props.onChange}>
                        </textarea>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default DeliveryDetails;