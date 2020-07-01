import React from 'react';
import { connect } from 'react-redux';
import { addRectangle } from '../../redux/shape/shape.actions';
import './SidebarOverview.scss'

const SidebarOverview = ({ rectangleData}) => {
    return ( 
        <div className="sidebar-overview" >
            {
                rectangleData.map(item=> (
                <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
     );
}


export default SidebarOverview