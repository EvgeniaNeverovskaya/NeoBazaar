import React from "react";
import {
  Container,
  Box,
  Text,
  List,
  ListItem,
  Grid,
  GridItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

import { Link as ReactRouterLink} from 'react-router-dom';




const Footer = () => {
  return (
    <Box as='footer' bg="rgba(255, 144, 232)" padding="50px 0 30px">
      <Container maxW='8xl' padding='0 30px' textTransform='uppercase'>
    <Grid
      templateColumns="repeat(2, 1.5fr) repeat(3, 1fr) 0.5fr 0.8fr"
      templateRows="0.7fr 1fr 0.5fr 0.7fr repeat(2, 1fr)"
      gap={0}
      w="full"
      h="full"
    >
      <GridItem
        gridArea="1 / 1 / 2 / 3"
      >
        <Text textStyle="button-medium">NEOBAZAAR</Text>
      </GridItem>
      <GridItem
        gridArea="2 / 1 / 3 / 3"
      >
        <Text textStyle="body-large">Join the more than 100,000 creators who use neobazaar
         to share their knowledge. Easily create and sell digital 
           downloads with our powerful yet simple platform.</Text>
      </GridItem>
      <GridItem
        gridArea="4 / 1 / 6 / 3"
      >
          <List fontWeight="500" fontSize="20px" lineHeight="23px" textTransform="none">
            <ListItem p="10px 0">Want to talk?</ListItem>
            <ListItem>neodigitalbazaar@gmail.com</ListItem>
          </List>
      </GridItem>
      <GridItem
        gridArea="6 / 1 / 7 / 3"
        display="flex" alignItems="flex-end"
      >
        <Text textStyle="button-medium">© 2024 NEOBAZAAR</Text>        
      </GridItem>
      <GridItem
        gridArea="1 / 4 / 2 / 5"
      >
        <Text textStyle="button-medium">INFORMATION</Text>
      </GridItem>
      <GridItem
        gridArea="1 / 5 / 2 / 6"
      >
        <Text textStyle="button-medium">PRODUCT</Text>
      </GridItem>
      <GridItem
        gridArea="1 / 6 / 2 / 7"
      >
        <Text textStyle="button-medium">Community</Text>
      </GridItem>
      <GridItem
        gridArea="2 / 4 / 3 / 5"
      >
        <List textStyle="body-large" display="flex" flexDirection="column" gap={3}>
          <ListItem >
            <ChakraLink as={ReactRouterLink}  to="/privacy-policy">PRivacy POLICY</ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink as={ReactRouterLink} to="/terms-of-service">tERMS OF SERVICE</ChakraLink>
          </ListItem>
        </List>
      </GridItem>
      <GridItem
        gridArea="2 / 5 / 3 / 6"
      >
        <List textStyle="body-large" display="flex" flexDirection="column" gap={3}>
          <ListItem>
            <ChakraLink>fEATURES</ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink>PRICING</ChakraLink>
          </ListItem>
        </List>
      </GridItem>
      <GridItem
        gridArea="2 / 6 / 3 / 7"
      >
        <List textStyle="body-large" display="flex" flexDirection="column" gap={3}>
          <ListItem>
            <ChakraLink>HELP</ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink>SECURITY</ChakraLink>
          </ListItem>
        </List>
      </GridItem>
      <GridItem
        gridArea="4 / 4 / 5 / 7"
      >
        <Text textStyle="button-medium" p="10px 0">CONTACT US</Text>
      </GridItem>
      <GridItem
        gridArea="5 / 4 / 6 / 7"
      >
        
          <List textStyle="body-large" display="flex" flexDirection="column" gap={2}>
            <ListItem>Nezavisimosti prospect, 21 </ListItem>
            <ListItem>220095, Minsk, Belarus </ListItem>
            <ListItem>Phone: +37529 2144897</ListItem>
          </List>
      </GridItem>
      <GridItem
        gridArea="4 / 7 / 6 / 8"
        display="flex" alignItems="flex-end" 
      >
          <List display="flex" justifyContent="space-between" width="100%">
            <ChakraLink><ListItem><FaFacebook color="rgba(178, 51, 134, 1)" fontSize="x-Large"/></ListItem></ChakraLink>
            <ChakraLink><ListItem><FaInstagram color="rgba(178, 51, 134, 1)" fontSize="x-Large"/></ListItem></ChakraLink>
            <ChakraLink><ListItem><FaLinkedin color="rgba(178, 51, 134, 1)" fontSize="x-Large"/></ListItem></ChakraLink>
          </List>
      </GridItem>
    </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
