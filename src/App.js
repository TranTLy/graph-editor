import React from 'react';
import CustomCanvasContainer from './components/CustomCanvas/CustomCanvas.container';
import SidebarCurrentShapeContainer from './components/SidebarCurrentShape/SidebarCurrentShape.container';
import SidebarOverviewContainer from './components/SidebarOverview/SidebarOverview.container';
import './App.scss';
import './index.style.scss'


const App = () => {
  return (
    <div className="app">
      <SidebarOverviewContainer />
      <CustomCanvasContainer />
      <SidebarCurrentShapeContainer />
    </div>
  );
}

export default App;
