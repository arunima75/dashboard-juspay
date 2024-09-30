import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_map from 'highcharts/modules/map';
import worldMap from '@highcharts/map-collection/custom/world.topo.json'; // Correct path for world map

// Initialize the map module
HC_map(Highcharts);

const WorldMap = () => {
  const options = {
    chart: {
      map: worldMap,
      height: 300,
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
          // Add more countries as needed
        ],
        mapData: worldMap,
        joinBy: 'hc-key',
        color: 'rgba(168,197,218,1)',
      },
    ],
    colorAxis: {
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

  return <HighchartsReact highcharts={Highcharts} constructorType={'mapChart'} options={options} />;
};

export default WorldMap;