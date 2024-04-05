/** Order Details Container */

//import dependencies
import React from 'react';

function OrderDetailsContainer(){
    return(
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="623" height="327" viewBox="0 0 623 327" fill="none" data-testid="order-details-svg">
                <g filter="url(#filter0_dd_267_42)">
                    <path d="M4 10C4 4.47716 8.47715 0 14 0H609C614.523 0 619 4.47715 619 10V309C619 314.523 614.523 319 609 319H14C8.47714 319 4 314.523 4 309V10Z" fill="white"/>
                    <path d="M4.5 10C4.5 4.7533 8.7533 0.5 14 0.5H609C614.247 0.5 618.5 4.7533 618.5 10V309C618.5 314.247 614.247 318.5 609 318.5H14C8.75329 318.5 4.5 314.247 4.5 309V10Z" stroke="black" stroke-opacity="0.5"/>
                </g>
                <defs>
                    <filter id="filter0_dd_267_42" x="0" y="0" width="623" height="327" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_267_42"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow_267_42" result="effect2_dropShadow_267_42"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_267_42" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default OrderDetailsContainer;