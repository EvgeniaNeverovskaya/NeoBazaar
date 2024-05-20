import React from "react";
import  {Link as ChakraLink, Flex, Container, Box, List, ListItem} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';


const Header = () => {
    return (
        <Box as="header" padding="8px" position="fixed" top={0} w="100%" zIndex="10" bg="white">
            <Container maxW="8xl" textTransform="uppercase" padding='0 30px'>
                <Flex justifyContent="space-between" alignItems="center">
                    <ChakraLink as={ReactRouterLink} to="/" style={{ textDecoration: "none" }} fontWeight="500" fontSize="30px" lineHeight="35.8px">NEOBAZAAR</ChakraLink>
                        <List textStyle="button-small">
                        <Flex direction="row" gap="40px" >
                            <ListItem>
                                <ChakraLink>about us</ChakraLink>
                            </ListItem>
                            <ListItem>
                                <ChakraLink>Features</ChakraLink>
                            </ListItem>
                            <ListItem>
                                <ChakraLink>pricing</ChakraLink>
                            </ListItem>
                            </Flex>
                        </List>
                    <ChakraLink textStyle="button-medium" as={ReactRouterLink} to="/log-in"> Log in </ChakraLink>
                </Flex>

            </Container>
        </Box>
    )
}

export default Header;