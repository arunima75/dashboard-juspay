import Card from "../UI/Card/Card";
import CardTitle from "../UI/Card/CardTitle";
import Chart from "../UI/Chart/Chart";
import SpinalChart from "../UI/Chart/SpinalChart";
import styles from "./Home.module.scss";
import WorldMap from "../UI/Chart/WorldMap";
import PieChart from "../UI/Chart/pie-chart";
import TopSellingList from "../UI/Table/TopSellingList";

function Home() {
  const graphData = [
    {
      name: "Customers",
      img: "/ArrowRise.png",
      value: "3,781",
      percentage: "+11.01%",
      bgColor: "card1",
    },
    {
      name: "Orders",
      img: "/ArrowFall.png",
      value: "1,219",
      percentage: "-0.03%",
      bgColor: "card2",
    },
    {
      name: "Revenue",
      img: "/ArrowRise.png",
      value: "$695",
      percentage: "+15.03%",
      bgColor: "card2",
    },
    {
      name: "Growth",
      img: "/ArrowRise.png",
      value: "30.1%",
      percentage: "+6.08%",
      bgColor: "card3",
    },
  ];
  const estimateGraph = [
    {
      month: "Jan",
      projection: 22,
      actual: 17,
    },
    {
      month: "Feb",
      projection: 27,
      actual: 21,
    },
    {
      month: "Mar",
      projection: 14,
      actual: 18,
    },
    {
      month: "Apr",
      projection: 29,
      actual: 24,
    },
    {
      month: "May",
      projection: 19,
      actual: 16,
    },
    {
      month: "Jun",
      projection: 27,
      actual: 21,
    },
  ];
  const estimateSpinalGraph = [
    {
      month: "Jan",
      projection: 10,
      actual: 20,
    },
    {
      month: "Feb",
      projection: 27,
      actual: 21,
    },
    {
      month: "Mar",
      projection: 14,
      actual: 18,
    },
    {
      month: "Apr",
      projection: 29,
      actual: 24,
    },
    {
      month: "May",
      projection: 19,
      actual: 16,
    },
    {
      month: "Jun",
      projection: 27,
      actual: 21,
    },
  ];
  return (
    <div>
      <CardTitle className="mb-2">eCommerce</CardTitle>
      <div>
        <div className={styles.grid1}>
          <div className={styles.gridTest}>
            {graphData.map((item, index) => (
              <Card color={item.bgColor} title={item.name} className="cardone">
                <div
                  key={index}
                  className="d-flex align-center justify-space-between mt-1"
                >
                  <h2>{item.value}</h2>
                  <div className="d-flex align-center">
                    <p>{item.percentage}</p>
                    <img
                      height={20}
                      src={`/images/${item.img}`}
                      alt={item.name}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className={styles.gridArea}>
            <Card color="primary" title="Projections vs Actuals" className={'sm-height'} >
              <Chart graphData={estimateGraph} chartType="column" height={168} />
            </Card>
          </div>
        </div>

        <div className={`mt-3 ${styles.grid2}`}>
          <Card color="primary" title="Revenue" >
            <SpinalChart graphData={estimateSpinalGraph} chartType="spline" height={"232px"}/>
          </Card>
          <Card color="primary" title={<span style={{ textAlign: "center", display: "block" }}>Revenue by Location</span>}>
            <WorldMap height={82}/>
          </Card>
        </div>

        <div className={`mt-3 ${styles.grid3}`}>
          <Card color="primary" title="Top Selling Products" >
            <TopSellingList />
          </Card>
          <Card color="primary" title="Total Sales">
            <PieChart graphData={estimateGraph} chartType="doughnut" width={170} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;