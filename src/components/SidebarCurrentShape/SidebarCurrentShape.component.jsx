import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import { Empty } from 'antd';
import './SidebarCurrentShape.scss'
import Footer from '../Footer/Footer';

const SidebarCurrentShape = ({ currentShape, editRectangle }) => {
    const onChangeNumber = (attribute, value) => {
        const newItem = { ...currentShape }
        newItem[attribute] = parseInt(value)
        editRectangle(newItem)
    }

    const onChangeText = (attribute, value) => {
        const newItem = { ...currentShape }
        newItem[attribute] = value
        editRectangle(newItem)
    }

    const onChangeColor = (e) => {
        editRectangle({ ...currentShape, fill: e.target.value })
    }

    if (currentShape) {
        const { x, y, width, height, name, fill } = currentShape
        return (
            <div className="sidebar-current-shape">
                <div className="form">
                    <CustomInput value={name} onChange={onChangeText} name="Name" type="text" />

                    <CustomInput value={x} onChange={onChangeNumber} name="x" />

                    <CustomInput value={y} onChange={onChangeNumber} name="y" />

                    <CustomInput value={width} onChange={onChangeNumber} name="Width" />

                    <CustomInput value={height} onChange={onChangeNumber} name="Height" />
                    <div className="input-item color-picker">
                        <label className="label">Color</label>
                        <input type="color" onChange={onChangeColor} value={fill} />
                    </div>
                </div>
                
                <Footer />

            </div>
        );
    }

    return <div className="sidebar-current-shape">
        <Empty className="empty" image={Empty.PRESENTED_IMAGE_SIMPLE} description="Choose one shape to adjust" />
        <Footer />
    </div>

}


export default SidebarCurrentShape