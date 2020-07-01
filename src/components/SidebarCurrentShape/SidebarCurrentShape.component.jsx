import React from 'react';
import { connect } from 'react-redux';
import { addRectangle } from '../../redux/shape/shape.actions';

const SidebarCurrentShape = ({ currentShape: {x, y, width, height, name, id} }) => {

    return (
        <div className="side-bar-overview">
            x:  {x} <br/>
            y:  {y} <br />
            width:  {width} <br />
            height:  {height} <br />
            name:  {name} <br />
            id:  {id} <br />
        </div>
    );
}


export default SidebarCurrentShape