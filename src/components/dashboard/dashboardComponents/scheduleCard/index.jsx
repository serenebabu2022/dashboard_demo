// ----------------------------------------------------------------------
/* Imports */
import {
  Box,
  IconButton,
  Typography,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";

/* Relative Imports */

/* Local Imports */
import styles from "./index.style";

function ScheduleCard() {
  return (
    <Box sx={styles.chartBox}>
      <Typography variant="h5" sx={styles.titleStyle}>
        Today's schedule
      </Typography>
      <List sx={styles.list}>
        <ListItem
          sx={styles.listItemStyle}
          alignItems="flex-start"
          style={{ borderLeft: `8px solid #9BDD7C` }}
        >
          <Box sx={styles.textStyle}>
            <Typography variant="subtitle1" sx={styles.listItemHeading}>
              Meeting with suppliers from Kuta Bali
            </Typography>
            <Typography variant="body1" sx={styles.listItemText}>
              14.00-15.00
            </Typography>
            <Typography variant="body1" sx={styles.listItemText}>
              at Sunset Road, Kuta, Bali{" "}
            </Typography>
          </Box>
        </ListItem>
        <ListItem
          sx={styles.listItemStyle}
          alignItems="flex-start"
          style={{ borderLeft: `8px solid #6972C3` }}
        >
          <Box sx={styles.textStyle}>
            <Typography variant="subtitle1" sx={styles.listItemHeading}>
              Check operation at Giga Factory 1
            </Typography>
            <Typography variant="body1" sx={styles.listItemText}>
              18.00-20.00
            </Typography>
            <Typography variant="body1" sx={styles.listItemText}>
              at Central Jakarta{" "}
            </Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}
export default ScheduleCard;
