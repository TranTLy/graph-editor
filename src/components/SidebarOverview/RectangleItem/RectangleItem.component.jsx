import React from 'react';
import CustomButton from '../../CustomButton/CustomButton'
import './RectangleItem.scss'

const RectangleItem = ({ deleteRectangle, changeCurrentShape, currentShape, ...dataItem }) => {
    const handleDelete = (e) => {
        e.stopPropagation()
        deleteRectangle(dataItem.id)
    }

    const handleChangeCurrentShape = (e) => {
        e.stopPropagation()
        changeCurrentShape(dataItem)
    }

    
        const { name, fill, id} = dataItem
        return (
            <div className={`rectangle-item ${currentShape && currentShape.id === id? 'active': ''}`} onClick={handleChangeCurrentShape}>
                <div className="shape" style={{backgroundColor: fill}}></div>
                <div className="right">
                <div className="name">{name}</div>
                <CustomButton className="small" onClick={handleDelete}>Delete</CustomButton>
                </div>
            </div>
        )
    
   
}


export default RectangleItem