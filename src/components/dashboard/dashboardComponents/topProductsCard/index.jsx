// ----------------------------------------------------------------------
/* Imports */
import { Box, IconButton, Typography, Container } from "@mui/material";
import Chart from "react-google-charts";

/* Relative Imports */

/* Local Imports */
import styles from "./index.style";

const LineData = [
  ["Dress", "Percentage"],
  ["Basic Tees", 55],
  ["Custom Short Pants", 31],
  ["Super Hoodies", 14],
];
const LineChartOptions = {
  hAxis: {
    minValue: 0,
  },
  vAxis: {
    baseline: 0,
    maxValue: 500,
  },

  pieSliceText: "none",
  pieSliceTextStyle: {
    color: "black",
  },
  fontSize: 13,
  slices: {
    0: { color: "#98D89E" },
    1: { color: "#F6DC7D" },
    2: { color: "#EE8484" },
  },
  tooltip: { text: "percentage" },
};
function TopProductsCard() {
  return (
    <Box sx={styles.chartBox}>
      <Box sx={styles.headingBox}>
        <Typography variant="h5" sx={styles.titleStyle}>
          Top Products
        </Typography>
        <Typography variant="subtitle1" sx={styles.monthStyle}>
          May - June 2021
        </Typography>
      </Box>
      <Chart
        height="90%"
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={LineData}
        options={LineChartOptions}
        rootProps={{ "data-testid": "2" }}
      />
    </Box>
  );
}
export default TopProductsCard;
