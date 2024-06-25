import React from "react";
import {
  Box,
  Container,
  Text,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t, i18n  } = useTranslation();

  const isRussian = i18n.language === "ru";


  return (
    <Box as='section' bg='#B23386'>
      <Container maxW='8xl' padding='0 30px'>
        <Grid
          color='white'
          padding='50px 0 100px'
          templateColumns='repeat(7, 1fr)'
          templateRows='repeat(3, 1fr)'
          gap={0}>
          <GridItem gridColumn='5 / span 3' gridRow='2 / 3'>
            <Box
              textTransform='uppercase'
              display='flex'
              flexDirection='column'
              gap='20px'>
              <Text textStyle='body-large'>{t("description.name")}</Text>
              <Text
                fontWeight='400'
                fontSize='16px'
                lineHeight='18.4px'
                fontFamily='Arial'>
                {t("description.description")}
              </Text>
            </Box>
          </GridItem>
          <GridItem gridColumn='1 / span 3' gridRow='3 / 4'>
            <Heading
             fontSize={isRussian ? 'clamp(2.125rem, -4.9rem + 13.8vw, 7.5rem)' : 'clamp(3.125rem, -2.679rem + 15.476vw, 11.25rem)'} 
             lineHeight='170px'
              fontWeight='500'>
              {t("description.digital")}
            </Heading>
          </GridItem>
          <GridItem gridColumn='4 / span 4' gridRow='4 / 5'>
            <Heading
             fontSize={isRussian ? 'clamp(2.125rem, -4.3rem + 13.8vw, 7.5rem)' : 'clamp(3.125rem, -2.679rem + 15.476vw, 11.25rem)'} 
              lineHeight='140px'
              fontWeight='500'
              textAlign='end'>
              {t("description.products")}
            </Heading>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Description;
