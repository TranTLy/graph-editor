import React from 'react';
import { ReactReduxContext, Provider } from "react-redux";
import './App.css';
import RectangleContainer from './components/Rectangle/Rectangle.container';
import Rectangle from './components/Rectangle/Rectangle.component';
import RectangleComponent from './components/Rectangle/Rectangle.component';
import SidebarOverview from './components/SidebarOverview/SidebarOverview';
import store from './redux/store'
import CustomCanvasContainer from './components/CustomCanvas/CustomCanvas.container';


const App = () => {
  return (
    <div className="app">
        <SidebarOverview/>
      <div style={{width: 100, height: 200,  backgroundColor: '#999' }}>dhhd</div>
          <CustomCanvasContainer/>
      <div style={{ width: 100, height: 200, backgroundColor: '#999' }}>djdhfhhd</div>
    </div>
  );
}

export default App;
