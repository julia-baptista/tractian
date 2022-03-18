import React, { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import InfoContext from '../context/infoContext';
import Sensor from '../components/Sensor';
import Table from '../components/Table';
import ResponsibleForm from '../components/ResponsibleForm';
import '../App.css'

function Asset() {
  let { id } = useParams();
  const [currentSensor, setCurrentSensor] = useState({});
  const { requestSingleSensor, requestAllUnits } = useContext(InfoContext);

  useEffect(() => {
    const response = async () => {
      // console.log('-------- id:', id);
      setCurrentSensor(await requestSingleSensor(id));
    };
    response();
  },[id, requestSingleSensor]);

  return (  
    <div>
    <div className="container">
      <h1>{currentSensor.name}</h1>
      {
          currentSensor.sensors ? 
          <div className="flexed-items">
            <Sensor sensor={ currentSensor } />
            <Table sensor={ currentSensor } />
          </div>
          : <p>Loading ...</p>
        }
      {/* <div>
        <ResponsibleForm />
      </div>   */}
    </div>
  </div>
  )
}

export default Asset;