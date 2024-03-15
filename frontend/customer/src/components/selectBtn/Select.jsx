import React from 'react';

//import css
import './Button.css';

function Dropdown(props){
    return(
        <div>
            {props.isVisible ? (
                <ul className="select-item-container pridi-medium-15">
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                    <li>Option 5</li>
                    <li>Option 6</li>
                    <li>Option 7</li>
                    <li>Option 8</li>
                    <li>Option 9</li>
                </ul>
            ) : null}
        </div>
    )
}

export default Dropdown;