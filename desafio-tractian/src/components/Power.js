import React, {useContext, useEffect, useState} from 'react';
import InfoContext from '../context/infoContext';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Power() {
  const { allSensors, requestAllSensors } = useContext(InfoContext);
  const [hAssets, setHAssets] = useState([]);
  const [powers, setPowers] = useState([]);

  useEffect(() => {
    const response = async () => {
      await requestAllSensors();
    };
    response();
  }, []);

  useEffect(() => {
    const sensors = allSensors.map((item) => ( item.specifications.power ? item.name : null ));
    setHAssets(sensors);
    const powerArray = allSensors.map((item) => ( item.specifications.power ? item.specifications.power : null ));
    setPowers(powerArray );
  }, [allSensors]);

  const options = { 
    title: {
      text: 'Potência'
    },
  
    yAxis: {
      title: {
        text: 'Potência em kWh'
      }
    },
    xAxis: {
      categories: hAssets
    },
    series: [{
      name: 'Potência',
      data: powers
    }]
  }

  return (
      <div className="container mb-80 box-shadow p-50">
        {
          powers
          ? <HighchartsReact highcharts={Highcharts} options={options} />
          : null
        } 
      </div>
  )
}

export default Power;
