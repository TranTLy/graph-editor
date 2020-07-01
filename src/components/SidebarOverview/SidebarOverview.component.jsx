import React from 'react';
import RectangleItemContainer from './RectangleItem/RectangleItem.container';
import AddRectangleContainer from '../AddRectangle/AddRectangle.container';
import './SidebarOverview.scss'

const SidebarOverview = ({ rectangleData}) => {
    return ( 
        <div className="sidebar-overview" >
            <AddRectangleContainer/>

            <div className="total">
                Total: <span>{rectangleData.length}</span>
            </div>
            <div className="content">
            {
                rectangleData.map(item=> (
                    <RectangleItemContainer key ={item.id} {...item}/>
                ))
            }
            </div>
        </div>
     );
}


export default SidebarOverview