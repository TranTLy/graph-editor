import React from 'react';
import { ReactReduxContext, Provider } from "react-redux";
import './App.css';
import RectangleContainer from './components/Rectangle/Rectangle.container';
import Rectangle from './components/Rectangle/Rectangle.component';
import RectangleComponent from './components/Rectangle/Rectangle.component';
import SidebarOverview from './components/SidebarOverview/SidebarOverview.component';
import store from './redux/store'
import CustomCanvasContainer from './components/CustomCanvas/CustomCanvas.container';
import SidebarCurrentShapeContainer from './components/SidebarCurrentShape/SidebarCurrentShape.container';
import SidebarOverviewContainer from './components/SidebarOverview/SidebarOverview.container';
import AddRectangleContainer from './components/AddRectangle/AddRectangle.container';


const App = () => {
  return (
    <div className="app">
      <AddRectangleContainer/>
        <SidebarOverviewContainer/>
          <CustomCanvasContainer/>
      <SidebarCurrentShapeContainer/>
    </div>
  );
}

export default App;
