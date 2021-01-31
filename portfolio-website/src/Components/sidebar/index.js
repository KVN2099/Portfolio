import React from 'react';
import './style.css';

function Sidebar(props) {
    return (
        <div className=" section sidebar">
            {props.children}
        </div>
    )
}

export default Sidebar
