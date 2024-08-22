import React from "react";
import {
  Box,
  Container,
  Text,
  Grid,
  GridItem,
  keyframes,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Fon from "../../image/nezhnyy-fon-dlya-fotoshopa-v-pastelnyh-tonah-linii.jpg"; // Импорт изображения

const Description = () => {
  const { t, i18n } = useTranslation();

  const slideInLeft = keyframes`
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  const slideInRight = keyframes`
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  const fontSize = {
    fontSize: ["3em", "4em", "6em", "8em"],
    lineHeight: ["60px", "90px", "140px", "160px"],
  };

  return (
    <Box as='section' position='relative'>
      <Box paddingBottom={{base: "1px"}}
        bgImage={`url(${Fon})`}
        bgSize='cover'
        bgPosition='center'
        bgRepeat='no-repeat'
        color='white'
        position='relative'
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: { base: "10%", sm: "10%" },
          bgGradient: "linear(to-b, rgba(255, 255, 255, 0) 0%, lemon 100%)",
        }}>
        <Container maxW='8xl' padding={["80px 10px 0", "120px 30px 30px"]}>
          <Box position='relative' textAlign='center' mb='50px'>
            <Grid
              templateRows='repeat(2, auto)'
              justifyItems='center'
              alignItems='center'
              
              >
              <GridItem
                sx={fontSize}
                fontWeight='bold'
                animation={`${slideInLeft} 2s ease-out forwards`}
                mr='32%'
                textShadow='2px 2px 4px rgba(0, 0, 0, 0.8)'>
                {t("description.digital")}
              </GridItem>
              <GridItem
                sx={fontSize}
                fontWeight='bold'
                animation={`${slideInRight} 2s ease-out forwards`}
                ml='25%'
                textShadow='2px 2px 4px rgba(0, 0, 0, 0.8)'>
                {t("description.products")}
              </GridItem>
            </Grid>
            <Box
              position='relative'
              mt='30px'
              p='10px'
              animation={`${fadeIn} 3s ease-out forwards`}
              mx='auto'
              maxW='80%'
              borderTop='2px solid #747171e8'
              borderBottom='2px solid #747171e8'>
              <Text
                fontSize={{ base: "9px", sm: "16px", lg: "23px" }}
                fontFamily='Arial'
                color='#383838'
                fontWeight='400'
                textAlign='center'>
                {t("description.description")}
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Description;
