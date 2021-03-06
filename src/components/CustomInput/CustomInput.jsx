import React from 'react';
import './CustomInput.scss'


const CustomInput = ({name, value, onChange, type, ...props}) => {
    const handleChange = (e) => {
        onChange(name.toLowerCase(), e.target.value)
    }

    return (
        <div className="custom-input">
            <label className="label">{name}</label>
            <input 
                type={ type || "number"}
                className="input" 
                value ={type ? value :  Math.round(value, 0)} // type is number by default
                onChange={handleChange}
                {...props}
                />
        </div>
    );
}

export default CustomInput;