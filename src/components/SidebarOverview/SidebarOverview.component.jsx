import React from 'react';
import './SidebarOverview.scss'
import RectangleItemContainer from './RectangleItem/RectangleItem.container';

const SidebarOverview = ({ rectangleData}) => {
    return ( 
        <div className="sidebar-overview" >
            {
                rectangleData.map(item=> (
                    <RectangleItemContainer key ={item.id} {...item}/>
                ))
            }
        </div>
     );
}


export default SidebarOverview