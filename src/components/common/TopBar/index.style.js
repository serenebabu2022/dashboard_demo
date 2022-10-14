export default {
  rootStyle: (theme) => ({
    display: "flex",
    flexDirection: "row",
    mb: theme.spacing(5),
    justifyContent: "space-between",
    [theme.breakpoints.down("1200")]: {
      mt: theme.spacing(2),
      mb: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      mt: theme.spacing(5),
      mb: theme.spacing(2),
    },
  }),
  topRightBox: () => ({
    justifyContent: "flex-end",
    display: "flex",
    flexDirection: "row",
  }),
  title: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.black,
    alignItems: "center",
    display: "flex",
  }),
  searchBox: (theme) => ({
    backgroundColor: theme.palette.common.white,
    borderRadius: `${theme.shape.borderRadius}px`,
    width: 180,
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  searchIconStyle: (theme) => ({
    padding: theme.spacing(0),
    display: "flex",
    alignItems: "center",
    mr: theme.spacing(1),
  }),
  searchTextStyle: (theme) => ({
    color: "#B0B0B0",
    alignItems: "center",
    ml: theme.spacing(2),
  }),
  notificationIconStyle: (theme) => ({
    ml: theme.spacing(3.7),
  }),
  profilePic: (theme) => ({
    ml: theme.spacing(2.5),
  }),
};
