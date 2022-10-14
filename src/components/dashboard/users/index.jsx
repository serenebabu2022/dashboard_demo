// ----------------------------------------------------------------------
/* Imports */
import { Box } from "@mui/material";

/* Relative Imports */
import Topbar from "../../common/TopBar";

/* Local Imports */
import styles from "./index.style";
import UserRecordsCard from "./userRecordsCard";

function Users() {
  /* output */
  return (
    <Box sx={styles.rootStyle}>
      <Topbar />
      <UserRecordsCard />
    </Box>
  );
}
export default Users;
