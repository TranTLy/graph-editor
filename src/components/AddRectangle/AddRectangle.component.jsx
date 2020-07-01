import React from 'react';
import { connect } from 'react-redux';
import { addRectangle } from '../../redux/shape/shape.actions';
import './AddRectangle.scss'

const AddRectangle = ({ addRectangle }) => {
    return (
        <div className="sidebar-overview" onClick={addRectangle}>
            Add
        </div>
    );
}

export default AddRectangle