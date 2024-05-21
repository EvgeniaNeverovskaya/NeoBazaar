import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Box, Flex, Text, Button } from "@chakra-ui/react";

const HeaderFormProducts = () => {
  return (
    <Box
      className='actions'
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
          Save
        </Button>
        <ChakraLink
          style={{ textDecoration: "none" }}
          as={ReactRouterLink}
          to='/products'>
          <Button
            borderRadius='10px'
            padding='30px 25px'
            fontSize='20px'
            lineHeight='23px'
            fontFamily='Arial'
            fontWeight='400'>
            X
          </Button>
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default HeaderFormProducts;
