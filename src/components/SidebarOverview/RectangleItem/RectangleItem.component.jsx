import React from 'react';
import CustomButton from '../../CustomButton/CustomButton'
import './RectangleItem.scss'

const RectangleItem = ({ name, id,  fill, deleteRectangle }) => {

    return (
        <div className="rectangle-item">
            <div className="shape" style={{backgroundColor: fill}}></div>
            <div className="right">
            <div className="name">{name}</div>
            <CustomButton className="small" onClick={() => deleteRectangle(id)}>Delete</CustomButton>
            </div>
        </div>
    )
}


export default RectangleItem