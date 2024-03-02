//import dependencies
import React from 'react';

//import css
import './CustomerInfo.css';

function CustomerInfo() {
    return(
        <>
            <div className="customer-info-layout">
                <div className="customer-info-title pridi-medium-25 orange-text">Customer Information</div>
                <div className="customer-info-box">
                    <svg width="638" height="680" viewBox="0 0 638 639" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_dd_267_27)">
                            <path d="M4 10C4 4.47715 8.47715 0 14 0H624C629.523 0 634 4.47715 634 10V621C634 626.523 629.523 631 624 631H14C8.47715 631 4 626.523 4 621V10Z" fill="white"/>
                            <path d="M4.5 10C4.5 4.7533 8.7533 0.5 14 0.5H624C629.247 0.5 633.5 4.7533 633.5 10V621C633.5 626.247 629.247 630.5 624 630.5H14C8.75329 630.5 4.5 626.247 4.5 621V10Z" stroke="black" stroke-opacity="0.5"/>
                        </g>
                        <defs>
                            <filter id="filter0_dd_267_27" x="0" y="0" width="638" height="639" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_267_27"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="effect1_dropShadow_267_27" result="effect2_dropShadow_267_27"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_267_27" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div className="order-form-layout">
                    <form className="order-form">
                        <div className="flex-row">
                            <div className="input-box">
                                <div className="flex-row">
                                    <label className="pridi-medium-15" for="fname">First Name</label>
                                    <div className="spacer-5"></div>
                                    <div className="asterisk-color pridi-medium-15">*</div>
                                </div>
                                
                                <input className="pridi-medium-12 input-padding-15" id="fname" name="fname" type="text" placeholder='Type first name here...'/>
                            </div>

                            <div className="spacer-30"></div>

                            <div className="input-box ">
                                <div className="flex-row">
                                    <label className="pridi-medium-15" for="lname">Last Name</label>
                                    <div className="spacer-5"></div>
                                    <div className="asterisk-color pridi-medium-15">*</div>
                                </div>
                                
                                <input className="pridi-medium-12 input-padding-15" id="lname" name="lname" type="text" placeholder='Type last name here...'/>
                            </div>
                        </div>

                        <div className="br-10"></div>

                        <div className="flex-row">
                            <div className="input-box">
                                <div className="flex-row">
                                    <label className="pridi-medium-15" for="conum">Contact Number</label>
                                    <div className="spacer-5"></div>
                                    <div className="asterisk-color pridi-medium-15">*</div>
                                </div>

                                
                                <input className="input-box pridi-medium-12 input-padding-10" style={{paddingLeft: "52px"}} id="conum" name="conum" type="text" placeholder='Type 10-digit number'/>
                                <div className="orange-box font-white pridi-medium-12 flex-row align-center margin-center"><span className="center-63">(+63)</span></div>

                            </div>

                            <div className="spacer-30"></div>

                            <div className="input-box">
                                <div className="flex-row">
                                    <label className="pridi-medium-15" for="email">Email Address</label>
                                    <div className="spacer-5"></div>
                                    <div className="asterisk-color pridi-medium-15">*</div>
                                </div>
                                
                                <input className="pridi-medium-12 input-padding-10" id="email" name="email" type="text" placeholder='Type valid email address...'/>
                            </div>
                        </div>

                        <div className="br-50"></div>

                        <div className="flex-row align-self-center">
                            <div className="divider-100 margin-center"></div>
                            <div className="spacer-25"></div>
                            <div className="pridi-medium-18 orange-text">Billing Address</div>
                            <div className="spacer-25"></div>
                            <div className="divider-100 margin-center"></div>
                        </div>

                        <div className="br-50"></div>

                        <div className="input-box" style={{width: "auto"}}>
                            <div className="flex-row">
                                <label className="pridi-medium-15" for="address1">Address Line 1</label>
                                <div className="spacer-5"></div>
                                <div className="asterisk-color pridi-medium-15">*</div>
                            </div>
                            <input className="pridi-medium-12 input-padding-15" id="address1" name="address1" type="text" placeholder='Type first address line (required)...'/>
                        </div>

                        <div className="br-10"></div>

                        <div className="input-box" style={{width: "auto"}}>
                            <div className="flex-row">
                                <label className="pridi-medium-15" for="address1">Address Line 2 <span id="opt-addr">(optional)</span></label>
                                <div className="spacer-5"></div>
                                <div className="asterisk-color pridi-medium-15">*</div>
                            </div>
                            <input className="pridi-medium-12 input-padding-15" id="address1" name="address1" type="text" placeholder='Type second address line (if applicable)...'/>
                        </div>

                        <div className="br-10"></div>

                        <div className="flex-row">
                            <div className="input-box">
                                <div className="flex-row">
                                    <label className="pridi-medium-15" for="city">City / Municipality</label>
                                    <div className="spacer-5"></div>
                                    <div className="asterisk-color pridi-medium-15">*</div>
                                </div>

                                
                                <input className="input-box pridi-medium-12 input-padding-10" style={{paddingLeft: "52px"}} id="city" name="city" type="dropdown" placeholder='Select City / Municipality'/>

                            </div>

                            <div className="spacer-30"></div>

                            <div className="input-box">
                                <div className="flex-row">
                                    <label className="pridi-medium-15" for="state">State / Province</label>
                                    <div className="spacer-5"></div>
                                    <div className="asterisk-color pridi-medium-15">*</div>
                                </div>
                                
                                <input className="pridi-medium-12 input-padding-10" id="state" name="state" type="text" placeholder='Select State / Province....'/>
                            </div>

                        </div>

                        <div className="br-30"></div>

                        <button className="orange-btn pridi-medium-20 font-white">Place Order</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CustomerInfo;