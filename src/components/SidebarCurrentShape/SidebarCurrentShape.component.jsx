import React from 'react';
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

    const onChangeColor = (e) => {
        editRectangle({...currentShape, fill: e.target.value})
    }

    if (currentShape) {
        const { x, y, width, height, name, fill } = currentShape
        return (
            <div className="sidebar-current-shape">
                <div className="input-item">
                    <CustomInput value={name} onChange={onChangeText} name="Name" type="text" />
                </div>
                <div className="input-item number">
                    <CustomInput value={x} onChange={onChangeNumber} name="x" />
                </div>
                <div className="input-item number">
                  <CustomInput value={y} onChange={onChangeNumber} name="y"/>
                </div>
                <div className="input-item number">
                    <CustomInput value={width} onChange={onChangeNumber} name="Width" />
                </div>
                <div className="input-item number">
                    <CustomInput value={height} onChange={onChangeNumber} name="Height" />
                </div>
                <div className="input-item number custom-input">
                        <label className="label">Color</label>
                    {/* <CustomInput value={fill} onChange={onChangeColor} name="Fill" type="color"/> */}
                    <input type="color" onChange={onChangeColor} value={fill}/>
                </div>
            </div>
        );
    }

    return <div>Empty</div>
}


export default SidebarCurrentShape