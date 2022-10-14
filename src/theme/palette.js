import { alpha } from "@mui/material";

// SETUP COLORS
const PRIMARY = {
  light: "#DDEFE0",
  main: "#0D5F9A",
};

const COMMON = {
  common: {
    black: "#000",
    white: "#fff",
    grey: "#58595B",
  },
  primary: { ...PRIMARY, contrastText: "#fff" },
};
const GREY = {
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#EDEDED",
  400: "#999999",
  500: "#858585",
  600: "#666666",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};
const palette = {
  light: {
    ...COMMON,
    text: {
      primary: "#414042",
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: "#F5F5F5", default: "#F5F5F5" },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: "#F5F5F5" },
    action: { active: GREY[500], ...COMMON.action },
  },
};
export default palette;
