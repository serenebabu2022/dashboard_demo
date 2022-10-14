export default {
  rootStyle: () => ({
    width: "100%",
  }),
  recordCard: (theme) => ({
    width: "90%",
    borderRadius: `10px`,
    backgroundColor: theme.palette.common.white,
    ml: theme.spacing(7.5),
    pt: theme.spacing(3.5),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      pt: theme.spacing(2),
    },
  }),
  titleStyle: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.black,
    margin: theme.spacing(0, 0, 3.6, 5.2),
    textAlign: "left",
    [theme.breakpoints.down("1200")]: {
      margin: theme.spacing(2, 0, 1, 5),
    },
  }),
  cardStyle: (theme) => ({
    height: 60,
    display: "flex",
    borderRadius: `10px`,
    backgroundColor: theme.palette.grey[300],
    marginX: theme.spacing(5.2),
    mb: theme.spacing(2.5),
    [theme.breakpoints.down("md")]: {
      marginX: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      marginX: theme.spacing(2),
    },
  }),
  innerCardStyle: (theme) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "space-between",
    gap: theme.spacing(2),
  }),
  countStyle: (theme) => ({
    fontFamily: theme.typography.fonts.Open_Sans,
    fontWeight: theme.typography.fontWeightBold,
    ml: theme.spacing(3),
    mb: theme.spacing(1),
    textAlign: "left",
  }),
  iconStyle: (theme) => ({
    display: "flex",
    justifyContent: "end",
    mt: theme.spacing(2.5),
    mr: theme.spacing(3),
    [theme.breakpoints.down(1440)]: {
      mt: theme.spacing(1),
      mr: theme.spacing(2),
    },
  }),
  mailStyle: (theme) => ({
    ml: theme.spacing(4),
    justifyContent: "center",
    textAlign: "left",
    fontWeight: theme.typography.fontWeightRegular,
  }),
  textStyle: (theme) => ({
    ml: theme.spacing(4),
    textAlign: "left",
    width: 130,
    [theme.breakpoints.down("sm")]: {
      ml: theme.spacing(2),
      width: 60,
    },
  }),
};
