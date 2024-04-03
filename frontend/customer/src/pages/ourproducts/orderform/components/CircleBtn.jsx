//import dependencies
import React from 'react';

//import css
import './CircleBtn.css';

function CircleButton(props) {
    return (
        <>
            {props.isIncBtn ? (
                <button id="incBtn" type="button" className="orange-circle-btn" onClick={props.onClick}>
                    {props.value}
                </button>
            ) : 
                <button id="decBtn" type="button" className="orange-circle-btn" onClick={props.onClick}>
                    {props.value}
                </button>
            }
        </>
    );
}

export default CircleButton;
