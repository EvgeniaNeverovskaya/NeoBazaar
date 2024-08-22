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
import { useTranslation } from "react-i18next";



const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <Box as='footer' bg='lemon' padding={{base: '0 0 15px', sm: '15px', md: "70px 30px"}}>
      <Container maxW='8xl'  textTransform='uppercase'>
        <Grid
          templateColumns='repeat(6, 1fr)'
          templateRows={{base:'0.3fr 1fr 0.2fr 0.3fr', md: '1fr 1fr 1.5fr 1fr' }}
          gap={0}
          w='full'
          h='full'>
          <GridItem gridArea='1 / 1 / 2 / 3'>
            <Text textStyle='button-medium'>NEOBAZAAR</Text>
          </GridItem>
          <GridItem gridArea='2 / 1 / 3 / 3'>
            <Text textStyle='body-large'>{t('footer.join_team')}
            </Text>
          </GridItem>
          <GridItem gridArea='4 / 1 / 6 / 3'></GridItem>
          <GridItem
            gridArea='4 / 1 / 4 / 3'
            display='flex'
            alignItems='flex-start'>
            <Text textStyle='button-medium'>{t('footer.copyright')}</Text>
          </GridItem>
          <GridItem gridArea='1 / 4 / 2 / 5'>
          <Text textStyle='button-medium'>{t('footer.information')}</Text>
          </GridItem>
          <GridItem gridArea='1 / 5 / 2 / 6' ml={4}>
          <Text textStyle='button-medium'>{t('footer.community')}</Text>
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
                {t('footer.privacy_policy')}
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink as={ReactRouterLink} to='/terms-of-service'>
                {t('footer.terms_of_service')}
                </ChakraLink>
              </ListItem>
            </List>
          </GridItem>
          <GridItem gridArea='2 / 5 / 3 / 6' ml={4}>
            <List
              textStyle='body-large'
              display='flex'
              flexDirection='column'
              gap={3}>
              <ListItem>
              <ChakraLink>{t('footer.help')}</ChakraLink>
              </ListItem>
            </List>
          </GridItem>
          <GridItem gridArea='2 / 6 / 3 / 7'></GridItem>
          <GridItem gridArea='4 / 4 / 5 / 7'>
            <List
              fontWeight='500'
              fontSize={["9px", "12px", "16px", "20px"]}
              lineHeight={["9px", "12px", "18px", "23px"]}
              textTransform='none'>
             <ListItem >{t('footer.want_to_talk')}</ListItem>
              <ListItem>{t('footer.contact_email')}</ListItem>
            </List>
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
