import React from "react";
import UserMenu from "../../components/userMenu";
import { Link as ReactRouterLink } from "react-router-dom";


import {
  Link as ChakraLink,
  Box,
  Container,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import Header from "../../components/Header";

const Products = () => {
  return (
    <> 
    
    <Box>
      <Header/>
     <UserMenu />
      <Box as='section' bg='rgba(35, 160, 148, 1)' >      
        <Container maxW='8xl' ml='330px' w='auto'>
          <Box
            minH='220px'
            display='flex'
            alignItems='center'
            justifyContent='space-between'>
            <Text textStyle='headline-small'>Product info</Text>
            <Flex gap='20px'>
              <Button
                borderRadius='10px'
                width='266px'
                padding='30px 0'
                fontSize='20px'
                lineHeight='23px'
                fontFamily='Arial'
                fontWeight='400'>
                Search
              </Button>
              <ChakraLink
                as={ReactRouterLink}
                to='/products/new'
                style={{ textDecoration: "none" }}>
                <Button
                  borderRadius='10px'
                  width='266px'
                  padding='30px 0'
                  fontSize='20px'
                  lineHeight='23px'
                  fontFamily='Arial'
                  fontWeight='400'>
                  New product
                </Button>
              </ChakraLink>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
    </>
  );
};

export default Products;
