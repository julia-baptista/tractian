import React from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import Healthscore from '../components/Healthscore';
import Power from '../components/Power';
import MaxTemp from '../components/maxTemp';
import Rpm from '../components/Rpm';
import TotalCollectsUptime from '../components/TotalCollectsUptime';
import TotalUptime from '../components/TotalUptime';


function Graphics() {

  return (
    <div className="container">
      <h1>Gráficos</h1>
        <Healthscore />
        <Power />
        <MaxTemp />
        <Rpm />
        <TotalCollectsUptime />
        <TotalUptime />
    </div>
  )
}

export default Graphics;