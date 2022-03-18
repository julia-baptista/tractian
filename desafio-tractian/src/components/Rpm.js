import React, {useContext, useEffect, useState} from 'react';
import InfoContext from '../context/infoContext';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Rpm() {
  const { allSensors, requestAllSensors } = useContext(InfoContext);
  const [hAssets, setHAssets] = useState([]);
  const [rpms, setRpms] = useState([]);

  useEffect(() => {
    const response = async () => {
      await requestAllSensors();
    };
    response();
  }, []);

  useEffect(() => {
    const sensors = allSensors.map((item) => ( item.specifications.rpm ? item.name : null ));
    setHAssets(sensors);
    const rpmArray = allSensors.map((item) => ( item.specifications.rpm ? item.specifications.rpm : null ));
    setRpms(rpmArray );
  }, [allSensors]);

  const options = { 
    title: {
      text: 'RPM'
    },
  
    yAxis: {
      title: {
        text: ''
      }
    },
    xAxis: {
      categories: hAssets
    },
    series: [{
      name: 'RPM',
      data: rpms
    }]
  }

  return (
      <div className="container mb-80 box-shadow p-50">
        {
          rpms
          ? <HighchartsReact highcharts={Highcharts} options={options} />
          : null
        } 
      </div>
  )
}

export default Rpm;
