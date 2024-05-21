import React, { useState } from "react";
import UserMenu from "../../components/userMenu";
import {
  Link as ChakraLink,
  Box,
  Container,
  Flex,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Switch,
} from "@chakra-ui/react";
import HeaderFormProducts from "./_headerFormProducts";
import GeneralInfo from "./_generalInfo";
import ProductsDescription from "./_contentDescription";
import CategorySelection from "./_categorySelection";
import MediaUpload from "./_mediaUpload";
import Pricing from "./_pricing";
import LimitProducts from "./_limitProducts";
import TimeSelection from "./_timeSelection";

const NewProducts = () => {
  return (
    <>
      <UserMenu />
      <Box as='section' className='product-save' bg='rgba(35, 160, 148, 1)'>
        <Container maxW='8xl' ml='330px' w='auto' padding='0 30px'>
          <HeaderFormProducts />
        </Container>
      </Box>
      <Box bg='rgba(249, 246, 244, 1)' minH='100vh' className='products-form'>
        <Container maxW='8xl' ml='330px' w='auto'>
          <Box padding='70px 30px 70px 80px'>
            <GeneralInfo />
            <Flex flexDirection='column' gap='50px'>
              <ProductsDescription />
              <CategorySelection />
              <MediaUpload />
              <Pricing />
              <LimitProducts />
            </Flex>
            <TimeSelection />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NewProducts;
