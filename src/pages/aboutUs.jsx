import React from "react";
import Header from "../components/Header";
import { Container } from "@chakra-ui/react";
import Reviews from "./Home/_reviews";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Container maxW='8xl' />
      <Reviews />
    </>
  );
};

export default AboutUs;
