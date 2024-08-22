import { extendTheme } from "@chakra-ui/react";

const typography = extendTheme({
  "heading-small": {
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: ["12px", "20px", "25px", "30px"],
    lineHeight: ["19px", "24px", "29px", "34px"],
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
    fontSize: ["6px", "8px", "10px", "14px"],
    lineHeight: ["10px", "13px", "14px", "16px"],
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
    fontSize: ["6px", "8px", "10px", "14px"],
    lineHeight: ["10px", "13px", "14px", "16px"],
  },
  "body-small": {
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: ["9px", "10px", "12px", "14px"],
    lineHeight: ["12px", "14px", "16px", "20px"],
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
    fontSize: ["10px", "12px", "14px", "16px"],
    lineHeight: ["12px", "14px", "16px", "20px"],
  },
});

export default typography;
