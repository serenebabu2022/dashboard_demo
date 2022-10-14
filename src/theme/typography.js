// ----------------------------------------------------------------------

/* Relative Imports */

import { pxToRem } from "../utility/formatFontSize";

// ----------------------------------------------------------------------

/**
 * To set fontsize according to the width of the screen.
 *
 * @param sm - small font size
 * @param md - medium font size
 * @param lg - large font size
 * @returns font size based on the width of the screen
 */
function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:768px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:1024px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1440px)": {
      fontSize: pxToRem(lg),
    },
  };
}
/* Constants */
const MONTSERRAT = "Montserrat-Regular";
const MONTSERRAT_MEDIUM = "Montserrat-Medium";
const MONTSERRAT_SEMIBOLD = "Montserrat-SemiBold";
const MONTSERRAT_BOLD = "Montserrat-Bold";
const LATO = "Lato-Regular";
const OPEN_SANS = "Open Sans";

const typography = {
  fontFamily: MONTSERRAT,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fonts: {
    Montserrat: MONTSERRAT,
    Montserrat_Medium: MONTSERRAT_MEDIUM,
    Montserrat_SemiBold: MONTSERRAT_SEMIBOLD,
    Montserrat_Bold: MONTSERRAT_BOLD,
    Lato: LATO,
    Open_Sans: OPEN_SANS,
  },
  h1: {
    fontFamily: MONTSERRAT_BOLD,
    lineHeight: 1,
    fontSize: pxToRem(72),
    ...responsiveFontSizes({ sm: 44, md: 50, lg: 72 }),
  },
  h2: {
    fontFamily: MONTSERRAT,
    fontWeight: 700,
    lineHeight: 1,
    fontSize: pxToRem(36),
    ...responsiveFontSizes({ sm: 22, md: 30, lg: 36 }),
  },
  h3: {
    fontFamily: MONTSERRAT_BOLD,
    lineHeight: 1,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 18, md: 22, lg: 24 }),
  },
  h4: {
    fontFamily: MONTSERRAT_SEMIBOLD,
    lineHeight: 1,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ sm: 18, md: 20, lg: 22 }),
  },
  h5: {
    fontFamily: MONTSERRAT,
    lineHeight: 1,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 16, md: 18, lg: 20 }),
  },
  h6: {
    fontFamily: LATO,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 17 }),
  },
  subtitle1: {
    fontFamily: LATO,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
  },
  subtitle2: {
    fontFamily: MONTSERRAT,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontFamily: LATO,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  body2: {
    fontFamily: MONTSERRAT,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  //   overline: {
  //     fontFamily: MONTSERRAT,
  //     lineHeight: 1.5,
  //     fontSize: pxToRem(12),
  //     letterSpacing: 1.2,
  //     textTransform: "uppercase",
  //   },
  //   button: {
  //     fontFamily: MONTSERRAT,
  //     fontWeight: "normal",
  //     lineHeight: 24 / 16,
  //     fontSize: pxToRem(16),
  //   }
};
export default typography;
