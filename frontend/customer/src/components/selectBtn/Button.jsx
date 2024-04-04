//import dependencies
import React from 'react';

//import css
import '../../pages/ourproducts/orderform/components/CustomerInfo.css';

function Button(props) {
    return (
        <button type="button" className="orange-dropdown-btn" onClick={props.onClick}>
            <div className="dropdown-icon">^</div>
        </button>
    );
}

export default Button;