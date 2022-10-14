export default {
  rootStyle: (theme) => ({
    flexDirection: "row",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      mt: theme.spacing(2),
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("sm")]: {
      mt: theme.spacing(5),
    },
  }),
  cardStyle: (theme) => ({
    width: 221,
    height: 120,
    borderRadius: `${theme.shape.borderRadiusMd}px`,
    mr: theme.spacing(4.5),
    [theme.breakpoints.down("md")]: {
      mr: theme.spacing(1),
      width: 180,
      height: 100,
      borderRadius: `${theme.shape.borderRadiusSm}px`,
    },
    [theme.breakpoints.down("sm")]: {
      mr: theme.spacing(0),
      width: 220,
      height: 100,
    },
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
  infoStyle: (theme) => ({
    ml: theme.spacing(3),
    justifyContent: "center",
    mb: theme.spacing(0.5),
    textAlign: "left",
    fontWeight: theme.typography.fontWeightRegular,
  }),
};
