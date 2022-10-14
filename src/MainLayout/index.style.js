export default {
  rootStyle: (theme) => ({
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down(1440)]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  }),
};
