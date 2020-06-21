import React, { useState } from 'react';
import { lineChartData } from './testData';
import DonutComponent from './components/DonutChart/DonutComponent';
import BarChart from './components/BarChart/BarChartComponent';
import LineChart from "./components/LineChart/LineChart";
import './App.scss';

const App = (props) =>  {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [groupColour, setGroupColour] = useState('lightgrey');

  function updateBarChart(group, colour) {
    setSelectedGroup(group);
    setGroupColour(colour);
  }

  return (
    <div className="dashboard-container">
      <svg viewBox="-2 -2 100 50" preserveAspectRatio="xMidYMid meet"> 
        <DonutComponent
          x={20}
          y={20} 
          onChangeGroup={updateBarChart}
        />
        <LineChart
          positionX={45}
          positionY={4}
          selectedGroup={selectedGroup}
          lineColour={groupColour}
        />
        <BarChart
          positionX={45}
          positionY={50}
          width={80}
          height={100}
          selectedGroup={selectedGroup}
          barColour={groupColour}
        />

      </svg>
    </div>
  );
}

export default App;
