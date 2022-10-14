// ----------------------------------------------------------------------
/* Imports */
import { Box, Grid } from "@mui/material";

/* Relative Imports */
import Topbar from "../../common/TopBar";

/* Local Imports */
import DashboardCards from "./dashboardCards";
import LineGraph from "./lineGraph";
import TopProductsCard from "./topProductsCard";
import ScheduleCard from "./scheduleCard";
import styles from "./index.style";

function DashboardComponents() {
  /* output */
  return (
    <>
      <Box sx={styles.rootStyle}>
        <Box sx={styles.cardStyles}>
          <Topbar />
          <DashboardCards />
          <LineGraph />
          <Box sx={styles.bottomCards}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TopProductsCard />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <ScheduleCard />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default DashboardComponents;
