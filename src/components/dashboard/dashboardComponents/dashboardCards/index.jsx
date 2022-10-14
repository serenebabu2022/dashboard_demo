// ----------------------------------------------------------------------
/* Imports */
import { Box, IconButton, Typography, Grid } from "@mui/material";

/* Relative Imports */
import {
  UsersIcon,
  RevenueIcon,
  LikesIcon,
  TransactionIcon,
} from "../../../../assets/icons/icons";

/* Local Imports */
import styles from "./index.style";

function DashboardCards() {
  const dashboardInfo = [
    {
      id: 1,
      icon: <RevenueIcon style={{ width: 24, height: 24 }} />,
      info: "Total Revenues",
      count: "$2,129,430",
      backgroundColor: "#DDEFE0",
    },
    {
      id: 2,
      icon: <TransactionIcon style={{ width: 24, height: 24 }} isFilled />,
      info: "Total Transactions",
      count: "1520",
      backgroundColor: "#F4ECDD",
    },
    {
      id: 3,
      icon: <LikesIcon style={{ width: 24, height: 24 }} />,
      info: "Total Likes",
      count: "9721",
      backgroundColor: "#EFDADA",
    },
    {
      id: 4,
      icon: <UsersIcon style={{ width: 30, height: 24 }} />,
      info: "Total Users",
      count: "892",
      backgroundColor: "#DEE0EF",
    },
  ];
  return (
    <Box sx={styles.rootStyle}>
      <Grid container spacing={1}>
        {dashboardInfo.map((item, index) => {
          return (
            <Grid item key={index} xs={6} sm={6} md={6} lg={3}>
              <Box
                key={item.id}
                sx={styles.cardStyle}
                bgcolor={item.backgroundColor}
              >
                <Box sx={styles.iconStyle}>
                  <IconButton>{item.icon}</IconButton>
                </Box>
                <Typography variant="h6" sx={styles.infoStyle}>
                  {item.info}
                </Typography>
                <Typography sx={styles.countStyle} variant="h3">
                  {item.count}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
export default DashboardCards;
