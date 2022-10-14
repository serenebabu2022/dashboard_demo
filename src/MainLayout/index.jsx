// ----------------------------------------------------------------------
/* Imports */
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MobileMenu from "../components/common/MobileMenu";
import Sidebar from "../components/common/Sidebar";

/* Local Imports */
import styles from "./index.style";

function MainLayout() {
  const theme = useTheme();
  const laptopDownMatches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={styles.rootStyle}>
      {laptopDownMatches ? <MobileMenu /> : <Sidebar />}
    </Box>
  );
}
export default MainLayout;
