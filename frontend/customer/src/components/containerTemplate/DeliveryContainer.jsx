//import dependencies
import React from 'react';

function DeliveryContainer() {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="623"
                height="277"
                viewBox="0 0 623 277"
                fill="none"
                data-testid="delivery-svg"
            >
                <g filter="url(#filter0_dd_267_134)">
                    <path
                        d="M4 9.99999C4 4.47715 8.47715 0 14 0H609C614.523 0 619 4.47715 619 10V259C619 264.523 614.523 269 609 269H14C8.47714 269 4 264.523 4 259V9.99999Z"
                        fill="white"
                    />
                    <path
                        d="M4.5 9.99999C4.5 4.75329 8.75329 0.5 14 0.5H609C614.247 0.5 618.5 4.75329 618.5 10V259C618.5 264.247 614.247 268.5 609 268.5H14C8.75329 268.5 4.5 264.247 4.5 259V9.99999Z"
                        stroke="black"
                        strokeOpacity="0.5"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_dd_267_134"
                        x="0"
                        y="0"
                        width="623"
                        height="277"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_267_134" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_267_134" result="effect2_dropShadow_267_134" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_267_134" result="shape" />
                    </filter>
                </defs>
            </svg>
        </>
    );
}

export default DeliveryContainer;
