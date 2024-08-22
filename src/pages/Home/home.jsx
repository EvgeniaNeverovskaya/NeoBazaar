import React from "react";
import Description from "./_description";
import ProductsList from "./_productsList";
import Categories from "./_categories";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import { Box } from "@chakra-ui/react";
import ButtonStartSelling from "../../components/buttonStartSelling";




const Home = () => {
  return (
    <>
    <Header/>
    <Box bg='lemon'>
    <Description/>
    <ProductsList/>
    <ButtonStartSelling/>
    <Categories/>  
    </Box>
    <Footer/>
    </>
  );
};

export default Home;
