// ----------------------------------------------------------------------
/* Imports */
import { useState } from "react";
import { Box, Stack, Tab, Tabs, Typography, Icon } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

/* Relative Imports */
import { SearchIcon, NotificationIcon } from "../../../assets/icons/icons";
import profileImg from "../../../assets/images/profileImg.png";

/* Local Imports */
import styles from "./index.style";

function Topbar() {
  return (
    <Box sx={styles.rootStyle}>
      <Typography variant="h2" sx={styles.title}>
        Dashboard
      </Typography>
      <Box sx={styles.topRightBox}>
        <Box sx={styles.searchBox}>
          <Typography variant="subtitle1" sx={styles.searchTextStyle}>
            Search
          </Typography>
          <Icon sx={styles.searchIconStyle}>
            <SearchIcon />
          </Icon>
        </Box>
        <Icon sx={styles.notificationIconStyle}>
          <NotificationIcon />
        </Icon>
        <Box
          sx={styles.profilePic}
          component="img"
          src={profileImg}
          alt="profileImage"
        />
      </Box>
    </Box>
  );
}
export default Topbar;
