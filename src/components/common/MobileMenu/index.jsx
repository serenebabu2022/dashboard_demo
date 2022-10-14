// ----------------------------------------------------------------------
/* Imports */
import { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  useTheme,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

function MobileMenu() {
  const [value, setValue] = useState("dashboard");
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    event.preventDefault();
    setOpenFilterDrawer(false);
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ flexDirection: "row", display: "flex" }}>
        <IconButton
          onClick={() => setOpenFilterDrawer(true)}
          sx={styles.menuIcon}
        >
          <MenuIcon
            sx={{
              [theme.breakpoints.down("md")]: {
                width: 30,
                height: 30,
              },
              [theme.breakpoints.down("sm")]: {
                width: 38,
                height: 38,
              },
            }}
          />
        </IconButton>
      </Box>
      <Drawer
        anchor="left"
        open={openFilterDrawer}
        onClose={() => setOpenFilterDrawer(false)}
      >
        <Box sx={styles.mainContainer}>
          <Box sx={styles.header}>
            <Typography variant="h5" sx={styles.title}>
              Dash .
            </Typography>
            <IconButton onClick={() => setOpenFilterDrawer(false)}>
              <CloseIcon style={{ color: "#fff" }} />
            </IconButton>
          </Box>
          <Box sx={styles.mainContent}>
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
        </Box>
      </Drawer>
      {value === "dashboard" && <Dashboard />}
      {value === "users" && <Users />}
    </>
  );
}
export default MobileMenu;
