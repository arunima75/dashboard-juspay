import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_map from 'highcharts/modules/map';
import worldMap from '@highcharts/map-collection/custom/world.topo.json';

// Initialize the map module
HC_map(Highcharts);

const WorldMap = () => {
  const options = {
    chart: {
      map: worldMap,
      height: 150,
      backgroundColor: null
    },
    title: {
      text: '',
    },
    series: [
      {
        type: 'map',
        name: 'Cities',
        states: {
          hover: {
            enabled: false,
          },
        },
        data: [
          ['us', 1],
          ['ca', 1],
          ['br', 1],
          ['fr', 1],
          ['de', 1],
          ['cn', 1],
          ['in', 1],
        ],
        mapData: worldMap,
        joinBy: 'hc-key',
        color: 'rgba(168,197,218,1)',
      },
    ],
    colorAxis: {
      visible: false,
      min: 0,
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0],
    },
    tooltip: {
      pointFormat: 'Country: <b>{point.name}</b>',
    },
    credits:{
      enabled: false,
    },
  };

  return (
  <div style={{textAlign: 'left'}}>
   <HighchartsReact highcharts={Highcharts} containerProps={{ style: { height: "100%", width: "100%" } }} constructorType={'mapChart'}  options={options} />
   <div style={{ marginTop: '2px', marginLeft: '10px' }}>
        <p>New York</p>
        <p>San Francisco</p>
        <p>Sydney</p>
        <p>Singapore</p>
      </div>
  </div>
)};

export default WorldMap;