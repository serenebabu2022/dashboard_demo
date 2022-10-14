export default {
  rootStyle: (theme) => ({
    backgroundColor: theme.palette.primary.main,
    width: 280,
    borderRadius: `${theme.shape.borderRadiusMd}px`,
    height: "100vh",
    [theme.breakpoints.down(1440)]: {
      width: 210,
    },
  }),
  tabs: () => ({
    "& .MuiTabs-indicator": {
      display: "none",
    },
  }),
  title: (theme) => ({
    color: theme.palette.common.white,
    paddingTop: theme.spacing(7.5),
    paddingLeft: theme.spacing(6.25),
    [theme.breakpoints.down(1440)]: {
      paddingLeft: theme.spacing(3),
      paddingTop: theme.spacing(5),
    },
    textAlign: "left",
  }),
  textStyle: (theme) => ({
    ...theme.typography.h5,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.common.white,
    justifyContent: "start",
    paddingLeft: theme.spacing(0),
    ml: theme.spacing(6.25),
    [theme.breakpoints.down(1440)]: {
      ml: theme.spacing(3),
    },
    "&.Mui-selected": {
      color: theme.palette.common.white,
      fontWeight: 700,
    },
  }),
};
