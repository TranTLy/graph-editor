import React from 'react';
import './RectangleItem.scss'

const RectangleItem = ({ name, id,  fill, deleteRectangle }) => {

    return (
        <div className="rectangle-item">
            <div className="name">{name}</div>
            <button onClick={() => deleteRectangle(id)}>Delete</button>
        </div>
    )
}


export default RectangleItem