import React from 'react';
import { Input } from 'antd';
import { addRectangle } from '../../redux/shape/shape.actions';
import CustomInput from '../CustomInput/CustomInput';
import './SidebarCurrentShape.scss'

const SidebarCurrentShape = ({ currentShape, editRectangle }) => {
    const onChangeNumber = (attribute, value) =>{
        const newItem = {...currentShape}
        newItem[attribute] = parseInt(value)
        editRectangle(newItem)
    }

    const onChangeText = (attribute, value) => {
        const newItem = { ...currentShape }
        newItem[attribute] = value
        editRectangle(newItem)
    }

    if (currentShape) {
        const { x, y, width, height, name, id } = currentShape
        return (
            <div className="sidebar-current-shape">
                <div className="input-item">
                    <CustomInput value={name} onChange={onChangeText} name="name" type="text" />
                </div>
                <div className="input-item number">
                    <CustomInput value={x} onChange={onChangeNumber} name="x" />
                </div>
                <div className="input-item number">
                  <CustomInput value={y} onChange={onChangeNumber} name="y"/>
                </div>
                <div className="input-item number">
                    <CustomInput value={width} onChange={onChangeNumber} name="width" />
                </div>
                <div className="input-item number">
                    <CustomInput value={height} onChange={onChangeNumber} name="height" />
                </div>
            </div>
        );
    }

    return <div>Empty</div>
}


export default SidebarCurrentShape