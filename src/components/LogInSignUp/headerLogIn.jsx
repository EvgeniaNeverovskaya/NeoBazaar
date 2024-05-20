import React from "react";
import  {Link as ChakraLink, Flex, Container, Box,} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';


const HeaderLogIn = () => {
    return (
        <Box as="header" padding="8px" position="fixed" top={0} w="100%" zIndex="10" bg="white">
            <Container maxW="8xl" textTransform="uppercase" padding='0 30px'>
                <Flex justifyContent="space-between" alignItems="center">
                    <ChakraLink as={ReactRouterLink} to="/" style={{ textDecoration: "none" }} fontWeight="500" fontSize="30px" lineHeight="35.8px">NEOBAZAAR</ChakraLink>
                </Flex>

            </Container>
        </Box>
    )
}

export default HeaderLogIn;