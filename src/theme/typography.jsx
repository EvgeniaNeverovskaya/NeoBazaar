import { extendTheme } from "@chakra-ui/react";




const typography = extendTheme({
    "heading-small": {
      fontFamily: "Arial",
      fontWeight: 400,
      fontSize: ["30px"],
      lineHeight: "34.5px",
    },
    "button-small": {
      fontFamily: "SF Pro Display",
      fontWeight: 400,
      fontSize: ["14px"],
      lineHeight: "16.71px",
    },
    "button-medium": {
      fontFamily: "Arial",
      fontWeight: 700,
      fontSize: ["14px"],
      lineHeight: "16.1px",
    },
    "button-large": {
      fontFamily: "Arial",
      fontWeight: 400,
      fontSize: ["25px"],
      lineHeight: "28.75px",
    },
    "body-large": {
        fontFamily: "Arial",
        fontWeight: 400,
        fontSize: ["14px"],
        lineHeight: "16.1px",
      },
      "body-small": {
        fontFamily: "Arial",
        fontWeight: 400,
        fontSize: ["14px"],
        lineHeight: "20px",
      },
      "body-h3": {
        fontFamily: "Arial",
        fontWeight: 700,
        fontSize: ["20px"],
        lineHeight: "20px",
      },
      "headline-small": {
        fontFamily: "Arial",
        fontWeight: 400,
        fontSize: ["30px"],
        lineHeight: "35px",
      },
      "Ui/Body-medium": {
        fontWeight: 400,
        fontSize: ["16px"],
        lineHeight: "22px",
      },
  });

export default typography;
