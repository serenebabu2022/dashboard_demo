// ----------------------------------------------------------------------
/* Imports */
import { Box, Typography } from "@mui/material";

/* Local Imports */
import styles from "./index.style";

function UserRecordsCard() {
  const records = [
    {
      id: 1,
      name: "Robert Thomas",
      mail: "robert.thomas@gmail.com",
      gender: "male",
      role: "admin",
    },
    {
      id: 2,
      name: "Michelle Dan",
      mail: "michelle@dan.co",
      gender: "Female",
      role: "user",
    },
    {
      id: 3,
      name: "Tim Josh",
      mail: "tim@josh.me",
      gender: "male",
      role: "user",
    },
    {
      id: 4,
      name: "Robert Thomas",
      mail: "robert.thomas@gmail.com",
      gender: "male",
      role: "admin",
    },
    {
      id: 5,
      name: "Michelle Dan",
      mail: "michelle@dan.co",
      gender: "Female",
      role: "user",
    },
    {
      id: 6,
      name: "Gail Forcewind",
      mail: "gail.force@wind.co",
      gender: "male",
      role: "user",
    },
    {
      id: 7,
      name: "Tim Josh",
      mail: "tim@josh.me",
      gender: "male",
      role: "user",
    },
    {
      id: 8,
      name: "Paige Turner",
      mail: "paige@turn.er",
      gender: "male",
      role: "user",
    },
  ];
  return (
    <Box sx={styles.rootStyle}>
      <Box sx={styles.recordCard}>
        <Typography variant="h5" sx={styles.titleStyle}>
          User Records
        </Typography>
        {records.map((item) => {
          return (
            <Box key={item.id} sx={styles.cardStyle}>
              <Box sx={styles.innerCardStyle}>
                <Typography variant="subtitle1" sx={styles.textStyle}>
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" sx={styles.textStyle}>
                  {item.mail}
                </Typography>
                <Typography variant="subtitle1" sx={styles.textStyle}>
                  {item.gender}
                </Typography>
                <Typography variant="subtitle1" sx={styles.textStyle}>
                  {item.role}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
export default UserRecordsCard;
