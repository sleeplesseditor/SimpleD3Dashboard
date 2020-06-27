import React, { useState } from 'react';
import { lineChartData } from './testData';
import Draggable, { handleStart, handleStop } from 'react-draggable';
import DonutComponent from './components/DonutChart/DonutComponent';
import BarChart from './components/BarChart/BarChartComponent';
import LineChart from "./components/LineChart/LineChart";
import './App.scss';

const App = (props) =>  {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [groupColour, setGroupColour] = useState('lightgrey');
  const dragHandlers = {onStart: handleStart, onStop: handleStop};

  function updateBarChart(group, colour) {
    setSelectedGroup(group);
    setGroupColour(colour);
  }

  return (
    <div className="draggable-container">
      <Draggable {...dragHandlers}>
        <div className="dashboard-container-1">
        <DonutComponent
          x={20}
          y={20} 
          onChangeGroup={updateBarChart}
        />
        </div>
      </Draggable>
      <Draggable {...dragHandlers} defaultPosition={{x: 725, y: -485}}>
        <div className="dashboard-container-2">
          <LineChart
            positionX={40}
            positionY={10}
            selectedGroup={selectedGroup}
            lineColour={groupColour}
          />
        </div>
      </Draggable>
      <Draggable {...dragHandlers} defaultPosition={{x: 725, y: -525}}>
        <div className="dashboard-container-3">
          <BarChart
            positionX={45}
            positionY={50}
            width={80}
            height={100}
            selectedGroup={selectedGroup}
            barColour={groupColour}
          />
        </div>
      </Draggable>
    </div>
  );
}

export default App;
