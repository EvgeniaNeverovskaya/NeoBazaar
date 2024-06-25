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
import { Link as ReactRouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box as='footer' bg='rgba(255, 144, 232)' padding='50px 0 30px'>
      <Container maxW='8xl' padding='0 30px' textTransform='uppercase'>
        <Grid
          templateColumns='repeat(2, 1.5fr) repeat(3, 1fr) 0.5fr 0.8fr'
          templateRows='0.8fr 1fr 0.5fr 0.7fr 0.5fr'
          gap={0}
          w='full'
          h='full'>
          <GridItem gridArea='1 / 1 / 2 / 3'>
            <Text textStyle='button-medium'>NEOBAZAAR</Text>
          </GridItem>
          <GridItem gridArea='2 / 1 / 3 / 3'>
            <Text textStyle='body-large'>
              JOIN THE TEAM OF CUSTOMER WHO USE NEO BAZAAR TO SHARE THEIR
              KNOWLEDGE. EASILY CREATE AND SELL DIGITAL DOWNLOADS USING OUR
              POWERFUL YET SIMPLE PLATFORM.
            </Text>
          </GridItem>
          <GridItem gridArea='4 / 1 / 6 / 3'></GridItem>
          <GridItem
            gridArea='6 / 1 / 7 / 3'
            display='flex'
            alignItems='flex-end'>
            <Text textStyle='button-medium'>© 2024 NEOBAZAAR</Text>
          </GridItem>
          <GridItem gridArea='1 / 4 / 2 / 5'>
            <Text textStyle='button-medium'>INFORMATION</Text>
          </GridItem>
          <GridItem gridArea='1 / 5 / 2 / 6'>
            <Text textStyle='button-medium'>Community</Text>
          </GridItem>
          <GridItem gridArea='1 / 6 / 2 / 7'></GridItem>
          <GridItem gridArea='2 / 4 / 3 / 5'>
            <List
              textStyle='body-large'
              display='flex'
              flexDirection='column'
              gap={3}>
              <ListItem>
                <ChakraLink as={ReactRouterLink} to='/privacy-policy'>
                  PRivacy POLICY
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink as={ReactRouterLink} to='/terms-of-service'>
                  tERMS OF SERVICE
                </ChakraLink>
              </ListItem>
            </List>
          </GridItem>
          <GridItem gridArea='2 / 5 / 3 / 6'>
            <List
              textStyle='body-large'
              display='flex'
              flexDirection='column'
              gap={3}>
              <ListItem>
                <ChakraLink>HELP</ChakraLink>
              </ListItem>
            </List>
          </GridItem>
          <GridItem gridArea='2 / 6 / 3 / 7'></GridItem>
          <GridItem gridArea='4 / 4 / 5 / 7'>
            <List
              fontWeight='500'
              fontSize='20px'
              lineHeight='23px'
              textTransform='none'>
              <ListItem p='10px 0'>Want to talk?</ListItem>
              <ListItem>neodigitalbazaar@gmail.com</ListItem>
            </List>{" "}
          </GridItem>
          <GridItem gridArea='5 / 4 / 6 / 7'></GridItem>
          <GridItem
            gridArea='4 / 7 / 6 / 8'
            display='flex'
            alignItems='flex-end'></GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
