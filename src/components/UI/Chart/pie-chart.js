import React, { useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import styles from "./charts.module.scss"

function PieChart({ height }) {
  const [options] = useState({
    chart: {
      height: height,
      backgroundColor: null,
    },
    title: {
        text: ""
    },
    colors: ["#1c1c1c", "#baecbd", "#95a3fc", "#b1e3ff"],
    plotOptions: {
      pie: {
        innerSize: "70%",
        size: "130%",
        dataLabels: {
          enabled: false,
        },
        borderWidth: 0,
        shadow: false, 
        states: {
          hover: {
            enabled: true,
            halo: {
              size: 0, 
            },
            brightness: 0,
            opacity: 1,  
          },
          select: {
            enabled: false, 
          }
        },
        showInLegend: true
      },
    },
    tooltip: {
      formatter: function () {
        return `<b>${this.percentage.toFixed(1)}%</b>`;
      },
      backgroundColor: '#1C1C1CCC',
      borderRadius: 8,
      className: 'custom-tooltip',
      style:{
        color: '#FFFFFF',
        width:'51px',
        height:'26px',
      }
    },
    legend: {
      enabled: true,
      align: 'left',
      justifyContent: 'space-between',
      verticalAlign: 'bottom',
      layout: 'horizontal',
      itemMarginTop: 10, 
      itemMarginBottom: 5,
      labelFormatter: function() {
        return `<span class="d-flex justify-space-between w-100">
                <span>${this.name}</span> 
                <span>$${this.y.toFixed(2)}</span>
            </span>`; 
      },
      itemStyle: {
        width: '200px', 
        whiteSpace: 'nowrap',
    },
    itemWidth: 200, 
    symbolHeight: 10, 
    },
    series: [
      {
        type: "pie",
        data: [
          {
            name: "Direct",
            y: 300.56,
          },
          {
            name: "Affiliate",
            y: 135.18,
          },
          {
            name: "Sponsored",
            y: 154.02,
          },
          {
            name: "E-mail",
            y: 48.96,
          },
        ],
      },
    ],
  });

  return (
    <div className={styles.highchartsPie}>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
);
}

export default PieChart;