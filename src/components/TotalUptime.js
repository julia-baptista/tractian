import React, {useContext, useEffect, useState} from 'react';
import InfoContext from '../context/infoContext';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function TotalUptime() {
  const { allSensors, requestAllSensors } = useContext(InfoContext);
  const [hAssets, setHAssets] = useState([]);
  const [totalUptimes, setTotalUptimes] = useState([]);

  useEffect(() => {
    const response = async () => {
      await requestAllSensors();
    };
    response();
  }, []);

  useEffect(() => {
    const sensors = allSensors.map((item) => ( item.metrics.totalUptime ? item.name : null ));
    setHAssets(sensors);
    const totalUptimeArray = allSensors.map((item) => ( item.metrics.totalUptime ? item.metrics.totalUptime : null ));
    setTotalUptimes(totalUptimeArray);
  }, [allSensors]);

  const options = { 
    title: {
      text: ' Total de Horas de Coletas Uptime (Ligada)'
    },
  
    yAxis: {
      title: {
        text: ' Total de Horas de Coletas Uptime (Ligada)'
      }
    },
    xAxis: {
      categories: hAssets
    },
    series: [{
      name: ' Total de Horas de Coletas Uptime (Ligada)',
      data: totalUptimes
    }]
  }

  return (
      <div className="container mb-80 box-shadow p-50">
        {
          totalUptimes
          ? <HighchartsReact highcharts={Highcharts} options={options} />
          : null
        } 
      </div>
  )
}

export default TotalUptime;
