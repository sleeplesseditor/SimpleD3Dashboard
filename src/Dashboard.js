import React, { useState } from 'react';
import { lineChartData } from './testData';
import DonutComponent from './components/DonutChart/DonutComponent';
import BarChart from './components/BarChart/BarChartComponent';
import './App.scss';

const App = (props) =>  {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [selectedLine, setSelectedLine] = useState(lineChartData);
  const [groupColour, setGroupColour] = useState('lightgrey');

  function updateBarChart(group, colour) {
    setSelectedGroup(group);
    setGroupColour(colour);
  }

  return (
    <div className="dashboard-container">
      <svg viewBox="-2 -2 100 100" preserveAspectRatio="xMidYMid meet"> 
        <DonutComponent
          x={15}
          y={15} 
          onChangeGroup={updateBarChart}
        />
        <BarChart
          positionX={35}
          positionY={35}
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
