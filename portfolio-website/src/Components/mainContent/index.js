import React from 'react';
import './style.css';

function MainContent(props) {
    return (
        <div className="section container">
            {props.children}
        </div>
    )
}

export default MainContent;