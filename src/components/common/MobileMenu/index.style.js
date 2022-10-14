export default {
  mainContainer: (theme) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
  }),
  mainContent: {
    flex: 1,
    overflow: "hidden",
  },
  header: (theme) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1, 0, 1, 3),
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: theme.palette.common.white,
  }),
  textStyle: (theme) => ({
    ...theme.typography.subtitle1,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.common.white,
    justifyContent: "start",
    ml: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      ml: theme.spacing(1),
    },
    "&.Mui-selected": {
      color: theme.palette.common.white,
      fontWeight: 700,
    },
  }),
  menuIcon: (theme) => ({
    [theme.breakpoints.down("md")]: {
      pt: theme.spacing(0),
      mt: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      mt: theme.spacing(5),
    },
  }),
};
