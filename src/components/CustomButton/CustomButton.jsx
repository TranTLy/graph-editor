import React from 'react';
import './CustomButton.scss'

const CustomButton = ({children, className, ...props}) => {
    return (
        <button className={`custom-button ${className}`} {...props}>
            {children}
        </button>
    );
}

export default CustomButton;