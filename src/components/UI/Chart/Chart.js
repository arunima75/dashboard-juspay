import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";


function Chart({ graphData, chartType, height }) {
   const {themeMode} = useContext(ThemeContext);

    const estimateChartOptions = {
        chart: {
          type: chartType,
          backgroundColor: null,
          height: height,
        },
        title: {
          text: "",
        },
        xAxis: {
          categories: graphData.map((item) => item.month),
          lineColor: 'quaternary',
          gridLineColor: 'quaternary',
          labels: {
            style: {
              color: themeMode === 'dark'? 'rgba(255,255,255,0.4)': 'rgba(28,28,28,0.4)',
            },
          },
        },
        yAxis: [
          {
            min: 0,
            max: 30,
            tickInterval: 10,
            title: {
              text: "",
            },
            labels: {
              formatter: function () {
                return this.value > 0 ? this.value + "M" : this.value;
              },
              style: {
                color: themeMode === 'dark'? 'rgba(255,255,255,0.4)': 'rgba(28,28,28,0.4)',
              },
            },
            
          },
        ],
        legend: {
          shadow: false,
        },
        tooltip: {
          shared: true,
        },
        plotOptions: {
          column: {
            grouping: false,
            shadow: false,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: "Projection",
            color: "rgba(168,197,218,0.5)",
            data: graphData.map((item) => item.projection),
            pointPadding: 0.3,
            pointWidth: 25,
            pointPlacement: -0.2,
            showInLegend: false,
          },
          {
            name: "Actual",
            color: "rgba(168,197,218,1)",
            data: graphData.map((item) => item.actual),
            pointPadding: 0.3,
            pointWidth: 25,
            pointPlacement: -0.2,
            showInLegend: false,
          },
        ],
        credits: {
          enabled: false,
        },
      };
  return (
    <HighchartsReact highcharts={Highcharts} options={estimateChartOptions} />
  );
}

export default Chart;