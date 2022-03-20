import React, {useContext, useEffect, useState} from 'react';
import InfoContext from '../context/infoContext';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function TotalCollectsUptime() {
  const { allSensors, requestAllSensors } = useContext(InfoContext);
  const [hAssets, setHAssets] = useState([]);
  const [totalCollectsUptimes, settotalCollectsUptimes] = useState([]);

  useEffect(() => {
    const response = async () => {
      await requestAllSensors();
    };
    response();
  }, []);

  useEffect(() => {
    const sensors = allSensors.map((item) => ( item.metrics.totalCollectsUptime ? item.name : null ));
    setHAssets(sensors);
    const totalCollectsUptime = allSensors.map((item) => ( item.metrics.totalCollectsUptime ? item.metrics.totalCollectsUptime : null ));
    settotalCollectsUptimes(totalCollectsUptime);
  }, [allSensors]);

  const options = { 
    title: {
      text: 'Total de Coletas Uptime (Ligada)'
    },
  
    yAxis: {
      title: {
        text: 'Total de Coletas Uptime (Ligada)'
      }
    },
    xAxis: {
      categories: hAssets
    },
    series: [{
      name: 'Total de Coletas Uptime (Ligada)',
      data: totalCollectsUptimes
    }]
  }

  return (
      <div className="container mb-80 box-shadow p-50">
        {
          totalCollectsUptimes
          ? <HighchartsReact highcharts={Highcharts} options={options} />
          : null
        } 
      </div>
  )
}

export default TotalCollectsUptime;
