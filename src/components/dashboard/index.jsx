// ----------------------------------------------------------------------
/* Imports */
import { Box } from "@mui/material";

/* Local Imports */
import DashboardComponents from "./dashboardComponents";
import styles from "./index.style";

function Dashboard() {
  /* output */
  return (
    <>
      <Box sx={styles.rootStyle}>
        <DashboardComponents />
      </Box>
    </>
  );
}
export default Dashboard;
