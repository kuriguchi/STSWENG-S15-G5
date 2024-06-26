import React from 'react';

//import css
import './Button.css';

function Dropdown(props){
    const values = Object.values(props.list);

    const renderValues = (values).map(function(value){
        return <li style={{cursor: "default"}} onClick={() => props.handleChange(value)}>{value}</li>;
    });

    return(
        <div onClick={props.toggleVisibility} data-testid="dropdown-container">
            {props.isVisible ? (
                <ul id={props.dropdownId} className="select-item-container pridi-medium-15" 
                    style={{"height": props.height, "width": props.width}}>
                    { renderValues }
                </ul>
            ) : null}
        </div>
    )
}

export default Dropdown;