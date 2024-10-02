import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


function SpinalChart({ graphData, chartType, height, width }) {

    const estimateChartOptions = {
        chart: {
          type: chartType,
          backgroundColor: null,
          height: height,
          width: width
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
              color: 'quaternary',
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
                color: 'quaternary',
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
            color: "black",
            data: graphData.map((item) => item.projection),
            pointPadding: 0.3,
            pointWidth: 0,
            pointPlacement: -0.2,
            showInLegend: false,
          },
          {
            name: "Actual",
            color: "rgba(168,197,218,1)",
            data: graphData.map((item) => item.actual),
            pointPadding: 0,
            pointWidth: 0,
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

export default SpinalChart;