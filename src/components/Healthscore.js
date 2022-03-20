import React, {useContext, useEffect, useState} from 'react';
import InfoContext from '../context/infoContext';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// const options = {
//   // chart: {
//   //   type: 'line', 'column', 'bar', 'scatter', 'area', 'areaspline'
//   // },

//   title: {
//     text: 'Primeiro Gráfico'
//   },

//   yAxis: {
//     title: {
//       text: 'Exemplo'
//     }
//   },
//   xAxis: {
//     categories: ['motor 1', 'motor 2', 'motor 3', 'motor 4', 'motor 5']
//   },
//   series: [{
//     name: 'Profit',
//     data: [['motor 1', 100], ['motor 2', 200], ['motor 3', 30], ['motor 4', 100], ['motor 5', 30]]
//     // data: [100, 200, 30, 100, 30, 50, 100]
//   }]
// }


function Healthscore() {
  const { allSensors, requestAllSensors } = useContext(InfoContext);
  const [hAssets, setHAssets] = useState([]);
  const [healthscores, setHealthscores] = useState([]);

  useEffect(() => {
    const response = async () => {
      await requestAllSensors();
    };
    response();
  }, []);

  useEffect(() => {
    const sensors = allSensors.map((item) => ( item.healthscore ? item.name : null ));
    setHAssets(sensors);
    const healthscoreArray = allSensors.map((item) => ( item.healthscore ? item.healthscore : null ));
    setHealthscores(healthscoreArray);
  }, [allSensors]);

  const options = { 
    title: {
      text: 'Saúde'
    },
  
    yAxis: {
      title: {
        text: 'Saúde em %'
      }
    },
    xAxis: {
      categories: hAssets
    },
    series: [{
      name: 'Saúde',
      data: healthscores
    }]
  }

  return (
      <div className="container mb-80 box-shadow p-50">
        {
          healthscores
          ? <HighchartsReact highcharts={Highcharts} options={options} />
          : null
        }       
      </div>
  )
}

export default Healthscore;
