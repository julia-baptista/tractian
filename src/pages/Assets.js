import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoContext from '../context/infoContext';
import Sensor from '../components/Sensor';
import '../App.css'

function Assets() {
  const { allSensors, requestAllSensors } = useContext(InfoContext);

  useEffect(() => {
    const response = async () => {
      await requestAllSensors();
    };
    response();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Soluções</h1>
      <div className="display-grid">
      {
        allSensors ? allSensors.map((sensor, index) => (
          <Link to={ `/assets/${sensor.id}` } className="link" key={ sensor.id }>
            <Sensor sensor={ sensor } key={index}/>
          </Link>
        )) : null
      }      
      </div>
    </div>
  )
}

export default Assets;
