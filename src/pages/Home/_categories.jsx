import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Grid, GridItem, Text, Center, Divider, Box, Link as ChakraLink } from "@chakra-ui/react";
import Gif3D from "../../image/Categories/Gif3D.gif";
import Education from "../../image/Categories/education.gif";
import Code from "../../image/Categories/code.gif";
import Game from "../../image/Categories/Game.gif";
import Audio from "../../image/Categories/audio.gif";
import Paint from "../../image/Categories/paint.gif";
import Photo from "../../image/Categories/photo.gif";
import Sport from "../../image/Categories/sport.gif";
import Design from "../../image/Categories/Design.gif";
import { Link as ReactRouterLink } from "react-router-dom";

const linkCategories = {
  color: "#867777",
  fontFamily: "Arial",
  fontSize: ["7px", "9px", "14px", "19px"], 
  fontWeight: "400",
  textTransform: 'uppercase',
};

const backgroundImageStyle = {
  bgPosition: "center",
  bgRepeat: "no-repeat",
  bgSize: "cover",
  width: "100%",
  height: "0",
  paddingTop: "80%",
  borderRadius: {base: "10px", lg: "20px"},
};

const Categories = () => {
  const { t } = useTranslation();

  return (
    <Box as='section' bg='lemon'>
      <Container maxW='8xl' padding={['20px 10px','035px 30px']}>
        <Center>
          <Text as="h2" textStyle="heading-small" m={{base: "0 0 20px", md:"0 0 50px"}} textAlign="center">
            {t('category.category_description_1')}
            <Divider orientation='vertical' />
            {t('category.category_description_2')}
          </Text>
        </Center>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={{base: "5px", md: "25px"}}
        >
          {[
            { image: Gif3D, link: '/3D', label: 'category.3D' },
            { image: Education, link: '/Education', label: 'category.education' },
            { image: Audio, link: '/Audio', label: 'category.audio' },
            { image: Design, link: '/Design', label: 'category.design' },
            { image: Paint, link: `${encodeURIComponent('Drawing & Painting')}`, label: 'category.drawing_&_painting' },
            { image: Photo, link: '/Photography', label: 'category.photography' },
            { image: Game, link: '/Gaming', label: 'category.gaming' },
            { image: Sport, link: `${encodeURIComponent('Fitness & Health')}`, label: 'category.fitness_&_health' },
            { image: Code, link: `${encodeURIComponent('Software development')}`, label: 'category.software_&_development' }
          ].map((item, index) => (
            <GridItem key={index}>
              <Box bgImage={item.image} {...backgroundImageStyle} />
              <Box p={{base: "5px", sm:"10px"}}   lineHeight={{ base:"10px", sm:"12px", md:"20px", lg:"28.75px"}}
              >
                <ChakraLink as={ReactRouterLink} to={item.link} sx={linkCategories}>
                  {t(item.label)} →
                </ChakraLink>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
