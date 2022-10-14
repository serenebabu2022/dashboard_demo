// ----------------------------------------------------------------------
/* Imports */
import { Box, IconButton, Typography, Container } from "@mui/material";
import Chart from "react-google-charts";

/* Relative Imports */

/* Local Imports */
import styles from "./index.style";

const LineData = [
  ["week", "Guest", "User"],
  ["", 100, 200],
  ["Week 1", 400, 410],
  ["Week 2", 200, 150],
  ["Week 3", 430, 450],
  ["Week 4", 180, 180],
  ["", 450, 250],
];
const LineChartOptions = {
  hAxis: {
    minValue: 0,
  },
  vAxis: {
    baseline: 0,
    maxValue: 500,
  },
  legend: { position: "right", textStyle: { fontSize: 14 } },
  curveType: "function",
  series: {
    0: { color: "#E9A0A0" },
    1: { color: "#9BDD7C" },
  },
};
function LineGraph() {
  return (
    <Box sx={styles.chartBox}>
      <Typography variant="h5" sx={styles.titleStyle}>
        Activities
      </Typography>
      <Chart
        height="90%"
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={LineData}
        options={LineChartOptions}
        rootProps={{ "data-testid": "2" }}
      />
    </Box>
  );
}
export default LineGraph;
