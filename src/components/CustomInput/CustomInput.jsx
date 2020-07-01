import React, {useState, useEffect} from 'react';

import './CustomInput.scss'
import { Input } from 'antd';


const CustomInput = ({name, value, onChange, type, ...props}) => {
    const handleChange = (e) => {
        onChange(name, e.target.value)
    }

    return (
        <div className="custom-input">
            <label className="label">{name}</label>
            <input 
                type={ type || "number"}
                className="input" 
                value ={ value}
                onChange={handleChange}
                {...props}
                />
        </div>
    );
}

export default CustomInput;