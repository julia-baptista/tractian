import React, { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import InfoContext from '../context/infoContext';
import Sensor from '../components/Sensor';
import Table from '../components/Table';
import '../App.css'

function Asset() {
  let { id } = useParams();
  const [currentSensor, setCurrentSensor] = useState({});
  const { requestSingleSensor } = useContext(InfoContext);

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
            <div>
             <Table sensor={ currentSensor } />
            </div>
            
          </div>
          : <p>Loading ...</p>
        }
    </div>
    <div className='container'>
      <Link to={ '/' }>
        <Button type='primay'>Voltar</Button>
      </Link>
    </div>
  </div>
  )
}

export default Asset;
