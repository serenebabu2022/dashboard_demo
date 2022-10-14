export default {
  chartBox: (theme) => ({
    width: 480,
    height: 256,
    backgroundColor: theme.palette.common.white,
    borderRadius: `${theme.shape.borderRadiusMd}px`,
    padding: theme.spacing(0.5),
    mt: theme.spacing(5),
    [theme.breakpoints.down("1440")]: {
      width: "95%",
    },
  }),
  titleStyle: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.black,
    margin: theme.spacing(3.8, 0, 0, 5),
    textAlign: "left",
    [theme.breakpoints.down("1200")]: {
      margin: theme.spacing(2, 0, 0, 5),
    },
  }),
  list: (theme) => ({
    margin: theme.spacing(2.7, 0, 0, 5),
    [theme.breakpoints.down("1200")]: {
      margin: theme.spacing(2, 0, 0, 2),
    },
  }),
  listItemStyle: (theme) => ({
    display: "flex",
    flexDirection: "column",
    mb: theme.spacing(1.5),
    [theme.breakpoints.down("1200")]: {
      mb: theme.spacing(0.5),
    },
  }),
  textStyle: () => ({
    textAlign: "left",
  }),
  listItemHeading: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[600],
  }),
  listItemText: (theme) => ({
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.grey[400],
  }),
  headingBox: (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }),
};
