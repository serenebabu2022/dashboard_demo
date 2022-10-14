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
    textAlign: "left",
    color: theme.palette.common.black,
    margin: theme.spacing(3.8, 0, 0, 5),
    [theme.breakpoints.down("1200")]: {
      margin: theme.spacing(2, 0, 0, 5),
    },
  }),
  monthStyle: (theme) => ({
    color: theme.palette.grey[500],
    margin: theme.spacing(3.8, 5, 0, 0),
    [theme.breakpoints.down("1200")]: {
      margin: theme.spacing(2, 5, 0, 0),
    },
  }),
  headingBox: (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }),
};
