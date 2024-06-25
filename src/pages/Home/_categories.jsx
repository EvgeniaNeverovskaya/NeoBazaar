import React from "react";
import { useTranslation } from "react-i18next";
import { Container,
  Grid,
  GridItem,
  Text,
  Center,
  Divider,
  Image,
} from "@chakra-ui/react";
import Gif3D from "../../image/Categories/Gif3D.gif";
import Education from "../../image/Categories/education.gif";
import Code from "../../image/Categories/code.gif";
import Game from "../../image/Categories/Game.gif";
import Audio from "../../image/Categories/audio.gif";
import Paint from "../../image/Categories/paint.gif";
import Photo from "../../image/Categories/photo.gif";
import Sport from "../../image/Categories/sport.gif";
import Design from "../../image/Categories/Design.gif";
import { Box,Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const linkCategories = {
  color: "#867777",
  fontFamily: "Arial",
  fontSize:{ base: "25px" },
  lineHeight: "28.75px",
  fontWeight: "400",
}

const backgroundImageStyle  = {
  bgPosition: "center",
  bgRepeat: "no-repeat",
  bgSize: "cover",
  width: "100%",
  height: "100%",
  borderRadius: '20px',
 };

const Categories = () => {
  const { t } = useTranslation();

  return (
    <Box as='section' >
      <Container maxW='8xl' margin="50px auto" padding='0 30px'>
        <Center>
          <Text as="h2" fontSize='30px' m="0 0 50px" lineHeight="34.5px" textAlign="center" fontFamily="Arial" fontWeight="400">
           {t('category.category_description_1')}
            <Divider orientation='vertical' />
            {t('category.category_description_2')}
          </Text>
        </Center>
     <Center>   
    <Grid
      templateColumns="repeat(3, 1fr)"
      templateRows="1fr 0.1fr 1fr 0.1fr 1fr 0.1fr"
      width="80%"
      columnGap={14}
      rowGap={1}
    >
      <GridItem gridArea="1 / 1 / 2 / 2" bgImage={Gif3D} {...backgroundImageStyle} />
      <GridItem gridArea="2 / 1 / 3 / 2" p="5px 20px 20px" gap={0}>
      <ChakraLink
          as={ReactRouterLink}
          to='/3D' style={linkCategories}>{t('category.3D')}</ChakraLink >
      </GridItem>

      <GridItem gridArea="1 / 2 / 2 / 3" bgImage={Education} {...backgroundImageStyle}  > 
      </GridItem>
      <GridItem gridArea="2 / 2 / 3 / 3" p="5px 20px 20px">
      <ChakraLink as={ReactRouterLink}
          to='/Education' style={linkCategories}>{t('category.education')}</ChakraLink >
      </GridItem>


      <GridItem gridArea="1 / 3 / 2 / 4" 
       bgImage={Audio} {...backgroundImageStyle} border='1px solid #e7e6e6'  />
      <GridItem gridArea="2 / 3 / 3 / 4" p="5px 20px 20px">      
      <ChakraLink as={ReactRouterLink} to='/Audio' style={linkCategories}>{t('category.audio')}</ChakraLink >
      </GridItem>


      <GridItem gridArea="3 / 1 / 4 / 2"  bgImage={Design} {...backgroundImageStyle} />
      <GridItem gridArea="4 / 1 / 5 / 2" p="5px 20px 20px">
      <ChakraLink as={ReactRouterLink} to='/Design' style={linkCategories}>{t('category.design')}</ChakraLink >
      </GridItem>


      <GridItem gridArea="3 / 2 / 4 / 3"  bgImage={Paint} {...backgroundImageStyle}  />
      <GridItem gridArea="4 / 2 / 5 / 3" p="5px 20px 20px">
      <ChakraLink as={ReactRouterLink} to='/Drawing-&-Painting' style={linkCategories}>{t('category.drawing_&_painting')}</ChakraLink >
      </GridItem>


      <GridItem gridArea="3 / 3 / 4 / 4"> 
      <Image src={Photo} objectFit="cover" alt='Photo'  borderRadius='20px'/></GridItem>
      <GridItem gridArea="4 / 3 / 5 / 4" p="5px 20px 20px">
      <ChakraLink as={ReactRouterLink} to='/Photography' style={linkCategories}>{t('category.photography')}</ChakraLink >    
      </GridItem>


      <GridItem gridArea="5 / 1 / 6 / 2"  bgImage={Game} {...backgroundImageStyle}  />
      <GridItem gridArea="6 / 1 / 7 / 2" p="5px 20px 20px">
      <ChakraLink as={ReactRouterLink} to='/Gaming' style={linkCategories}>{t('category.gaming')}</ChakraLink >   
         </GridItem>


      <GridItem gridArea="5 / 2 / 6 / 3" bgImage={Sport} {...backgroundImageStyle}  />
      <GridItem gridArea="6 / 2 / 7 / 3" p="5px 20px 20px">
      <ChakraLink as={ReactRouterLink} to='/Fitness-&-Health' style={linkCategories}>{t('category.fitness_&_health')}</ChakraLink >     
      </GridItem>


      <GridItem gridArea="5 / 3 / 6 / 4"  bgImage={Code} {...backgroundImageStyle}  />
      <GridItem gridArea="6 / 3 / 7 / 4" p="5px 20px 20px">
      <ChakraLink as={ReactRouterLink} to='/Software-&-Development' style={linkCategories}>{t('category.software_&_development')}</ChakraLink >
      </GridItem>
    </Grid>
    </Center>
      </Container>
    </Box>
  );
};

export default Categories;
