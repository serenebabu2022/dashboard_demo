export default {
  rootStyle: () => ({
    flexDirection: "row",
    display: "flex",
  }),
  cardStyles: (theme) => ({
    flexDirection: "column",
    ml: theme.spacing(7.2),
    [theme.breakpoints.down(1440)]: {
      marginX: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginX: theme.spacing(0),
    },
  }),
  bottomCards: (theme) => ({
    flexDirection: "row",
    display: "flex",
  }),
};
