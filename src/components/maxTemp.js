import React, {useContext, useEffect, useState} from 'react';
import InfoContext from '../context/infoContext';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function MaxTemp() {
  const { allSensors, requestAllSensors } = useContext(InfoContext);
  const [hAssets, setHAssets] = useState([]);
  const [maxTemps, setMaxTemps] = useState([]);

  useEffect(() => {
    const response = async () => {
      await requestAllSensors();
    };
    response();
  }, []);

  useEffect(() => {
    const sensors = allSensors.map((item) => ( item.specifications.maxTemp ? item.name : null ));
    setHAssets(sensors);
    const maxTempArray = allSensors.map((item) => ( item.specifications.maxTemp ? item.specifications.maxTemp : null ));
    setMaxTemps(maxTempArray);
  }, [allSensors]);

  const options = { 
    title: {
      text: 'Temperatura Máxima'
    },
  
    yAxis: {
      title: {
        text: 'Celsius'
      }
    },
    xAxis: {
      categories: hAssets
    },
    series: [{
      name: 'Temperatura Máxima',
      data: maxTemps
    }]
  }

  return (
      <div className="container mb-80 box-shadow p-50">
        {
          maxTemps
          ? <HighchartsReact highcharts={Highcharts} options={options} />
          : null
        }       
      </div>
  )
}

export default MaxTemp;
