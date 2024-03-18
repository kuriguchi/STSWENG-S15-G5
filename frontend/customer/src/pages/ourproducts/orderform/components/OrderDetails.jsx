//import dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import $ from 'jquery';

//import css
import './OrderDetails.css';

//import components
import MainContainer from '../../../../components/containerTemplate/ODContainer';
import carrot_cake from '../../../../assets/order-detail-imgs/carrot_cake.jpg';
import Button from '../../../../components/selectBtn/Button';
import Select from '../../../../components/selectBtn/Select';
import CircleButton from './CircleBtn';

function OrderDetails(props){
    const [isSizeSelectVisible, setSizeSelectVisible] = useState(false);
    const [qty, setQty] = useState(0);
    const [currSize, setCurrSize] = useState('');

    const sizes = {
        slice: 'A Slice',
        quarter: 'A Quarter',
        whole: 'Whole'
    }

    const toggleSizeSelectVisible = (event) => {
        setSizeSelectVisible(!isSizeSelectVisible);
    }

    const toggleQuantity = (event) => {
        const symbol = event.target.id;
        
        if(symbol === "incBtn"){
            setQty(qty + 1);
            props.onSelectChange("qty", qty);
        } else {
            setQty(qty - 1);
            props.onSelectChange("qty", qty);
        }
    }

    useEffect(() => {
        props.onSelectChange("qty", qty);
    }, [qty]);

    const handleSizeChange = (item) => {
        setCurrSize(item);
        props.onSelectChange("size", item);

        $("#orderSize").css("color", "black");
    }

    return(
        <>
            <div className="order-details-layout">
                <div className="order-details-title pridi-medium-25 orange-text">Order Details</div>
                <div className="order-details-box">
                    <MainContainer />
                </div>

                <div className="order-details-content">
                    <div className="order-details-imgbox">
                        <img src={carrot_cake} alt="carrot_cake" />
                    </div>

                    <div className="spacer-25"></div>

                    <form className="order-details-form">
                        <div className="cake-order-title pridi-medium-20">Carrot Cake</div>

                        <div className="br-5"></div>

                        <div className="cake-order-detail pridi-medium-12">Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Sed eu lorem quis velit accumsan venenatis vel eu nisl. 
                            Nunc fermentum sodales quam.
                        </div>

                        <div className="br-35"></div>

                        <div className="size-qty-form">
                            <div className="size-input-box">
                                <div className="flex-row">
                                    <label className="pridi-medium-15" for="size">Size</label>
                                    <div className="spacer-5"></div>
                                    <div className="asterisk-color pridi-medium-15">*</div>
                                </div>

                                <div className="select-box pridi-medium-12" 
                                     style={{"width": "193px", "height": "39px", "position": "relative"}}
                                    >
                                    <div id="orderSize" className="placeholder-text" style={{"position": "absolute", "left": "16px"}}>{currSize || "Select Sizes..."}</div>
                                    <div className="spacer-25"></div>
                                    <div className="order-select-size dropdown-box">
                                        <Button onClick={toggleSizeSelectVisible} />
                                    </div>
                                </div>

                                <div className="br-10"></div>

                                <Select {...{isVisible: isSizeSelectVisible, height: "60px", width: "193px", list: sizes, handleChange: handleSizeChange}} />
                            </div>

                            <div className="spacer-20"></div>

                            <div className="qty-input-box">
                                <div className="flex-row">
                                    <label className="pridi-medium-15" for="size">Quantity</label>
                                    <div className="spacer-5"></div>
                                    <div className="asterisk-color pridi-medium-15">*</div>
                                </div>

                                <div className="br-5"></div>

                                <div className="flex-row" 
                                     style={{justifyContent: "center", alignItems: "center"}}
                                    >

                                    <CircleButton {...{value: "-", onClick: toggleQuantity, isIncBtn: false}} />

                                    <div className="spacer-5"></div>
                                    <div className="qty-input-num pridi-medium-15">{qty}</div>
                                    <div className="spacer-5"></div>

                                    <CircleButton {...{value: "+", onClick: toggleQuantity, isIncBtn: true}}  />
                                </div>
                            </div>
                        </div>

                        <div className="br-25"></div>
                        <div className="total-box pridi-medium-20">Total: 2,250.00</div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default OrderDetails;