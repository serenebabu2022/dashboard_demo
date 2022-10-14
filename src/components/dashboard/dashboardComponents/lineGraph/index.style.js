export default {
  chartBox: (theme) => ({
    width: "99%",
    height: 359,
    backgroundColor: theme.palette.common.white,
    borderRadius: `${theme.shape.borderRadiusMd}px`,
    padding: theme.spacing(0.5),
    mt: theme.spacing(5),
    [theme.breakpoints.down("1200")]: {
      width: "100%",
      height: 359,
    },
    [theme.breakpoints.down("sm")]: {
      width: 470,
      height: 359,
    },
  }),
  titleStyle: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "left",
    color: theme.palette.common.black,
    margin: theme.spacing(3.8, 0, 0, 5),
  }),
};
