import React from 'react';
import './AddRectangle.scss'

const AddRectangle = ({ addRectangle }) => {
    return (
        <div className="add-rectangle" onClick={addRectangle}>
            <span className="icon lnr lnr-plus-circle"></span>
            <span className="title">Add</span>
        </div>
    );
}

export default AddRectangle