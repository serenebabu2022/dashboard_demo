// ----------------------------------------------------------------------
/* Imports */
import { useState } from "react";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";

/* Relative Imports */
import {
  DashboardIcon,
  TransactionIcon,
  ScheduleIcon,
  SettingIcon,
  UserIcon,
} from "../../../assets/icons/icons";

/* Local Imports */
import Dashboard from "../../dashboard";
import Users from "../../dashboard/users";
import styles from "./index.style";

function Sidebar() {
  const [value, setValue] = useState("dashboard");

  const handleTabChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };
  return (
    <Stack flexDirection="row">
      <Box sx={styles.rootStyle}>
        <Typography variant="h2" sx={styles.title}>
          Dash.
        </Typography>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleTabChange}
          sx={styles.tabs}
        >
          <Tab
            label="Dashboard"
            iconPosition="start"
            sx={styles.textStyle}
            value="dashboard"
            icon={<DashboardIcon style={{ marginRight: 10 }} />}
          />
          <Tab
            label="Transactions"
            iconPosition="start"
            sx={styles.textStyle}
            value="transactions"
            icon={<TransactionIcon style={{ marginRight: 10 }} />}
          />
          <Tab
            label="Schedules"
            iconPosition="start"
            sx={styles.textStyle}
            value="schedules"
            icon={<ScheduleIcon style={{ marginRight: 10 }} />}
          />
          <Tab
            label="Users"
            iconPosition="start"
            sx={styles.textStyle}
            value="users"
            icon={<UserIcon style={{ marginRight: 10 }} />}
          />
          <Tab
            label="Settings"
            iconPosition="start"
            sx={styles.textStyle}
            value="settings"
            icon={<SettingIcon style={{ marginRight: 10 }} />}
          />
        </Tabs>
      </Box>
      {value === "dashboard" && <Dashboard />}
      {value === "users" && <Users />}
    </Stack>
  );
}
export default Sidebar;
