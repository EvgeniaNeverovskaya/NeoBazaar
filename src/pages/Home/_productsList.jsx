import React from "react";
import Arrow from "../../image/Arrow.png";
import Arrow2 from "../../image/Arrow2.png";
import {
  Box,
  Container,
  Text,
  List,
  ListItem,
  Flex,
  Button,
  Image,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import products from "../../image/products .png";

const flexItemStyle = {
  flexBasis: "calc(50% - 15px)",
  height: "calc(50% - 20px)",
  margin: "7px 0",
  blockSize: "260px",
  borderRadius: "20px",
  padding: {base: "15px", md:"35px"},
};

const posAbsolute = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "28px",
  minWidth: ["0", "0", "220px", "280px"],
  minHeight: ["0", "0", "120px", "153px"],
  textAlign: "center",
  lineHeight: ["0", "0", "120px", "153px"],
};

const ProductsList = () => {
  const navigate = useNavigate();
  const goToAllPage = () => {
    navigate("/All");
  };
  const { t } = useTranslation();

  return (
    <Box as='section' position='relative' bg='lemon'>
      <Container maxW='8xl' padding={['20px 10px','30px']}>
        <Box
          bg='fuchsia'
          sx={posAbsolute}
          display={{ base: "none", md: "block" }}>
          <Image
            src={Arrow}
            display={{ base: "none", xl: "block" }}
            style={{
              position: "absolute",
              bottom: "100%",
              left: "100%",
              transform: "rotate(0deg)",
            }}
            size={50}
          />
          <Image
            display={{ base: "none", xl: "block" }}
            src={Arrow}
            style={{
              position: "absolute",
              bottom: "-29%",
              left: "100%",
              transform: "rotate(65deg)",
            }}
            size={50}
          />
          <Image
            display={{ base: "none", xl: "block" }}
            src={Arrow}
            style={{
              position: "absolute",
              bottom: "-30%",
              left: "-25%",
              transform: "rotate(180deg)",
            }}
            size={50}
          />
          <Image
            display={{ base: "none", xl: "block" }}
            src={Arrow}
            style={{
              position: "absolute",
              bottom: "100%",
              left: "-25%",
              transform: "rotate(250deg)",
            }}
            size={50}
          />
          <Text
            color='white'
            fontSize={["0", "0", "20px", "25px"]}
            fontWeight='400'>
            NEOBAZAAR
          </Text>
        </Box>

        <Flex
          wrap='wrap'
          justify='space-between'
          align='flex-start'
          direction={{ base: "column", md: "row" }}
          gap='15px'>
          <Box
            bg='rgba(255, 144, 232, 0.4)'
            sx={flexItemStyle}
            width={{ base: "100%" }}>
            <Flex justifyContent={{base: "space-around", md: 'flex-start' }}>
              <Box>
                <Text
                  textStyle='heading-small'
                  mb='16px'
                  color='rgba(45, 44, 44, 1)'>
                  {t("products_list.sell_anything.name")}
                </Text>
                <List textStyle='body-small' color='rgba(145, 101, 136, 1)'>
                  <ListItem> {t("products_list.sell_anything.1")}</ListItem>
                  <ListItem> {t("products_list.sell_anything.2")}</ListItem>
                  <ListItem> {t("products_list.sell_anything.3")}</ListItem>
                  <ListItem> {t("products_list.sell_anything.4")}</ListItem>
                  <ListItem> {t("products_list.sell_anything.5")}</ListItem>
                  <ListItem> {t("products_list.sell_anything.6")}</ListItem>
                  <ListItem> {t("products_list.sell_anything.7")}</ListItem>
                </List>
              </Box>
              <Image
                display={{ base: "block", sm: "block", md: "none" }}
                src={products}
                maxW='140px'
                width='40%' 
                alignSelf='center'
              />
            </Flex>
          </Box>

          <Box bg='rgba(167, 217, 212, 1)' sx={flexItemStyle}>
            <Text
              textAlign='end'
              textStyle='heading-small'
              mb='16px'
              color='rgba(45, 44, 44, 1)'>
              {t("products_list.sell_to_anyone.name")}
            </Text>
            <Text
              textStyle='body-small'
              textAlign='right'
              color='rgba(0, 90, 78, 1)'>
              {t("products_list.sell_to_anyone.1")}
            </Text>
          </Box>
          <Box
            bg='rgba(219, 231, 255, 1)'
            sx={flexItemStyle}
            alignContent='flex-end'>
            <Text textStyle='heading-small' mb='16px'>
              {t("products_list.sell_anywhere.name")}
            </Text>
            <Text textStyle='body-small' color='rgba(99, 111, 135, 1)'>
              {t("products_list.sell_anywhere.1")}
            </Text>
          </Box>
          <Box
            bg='rgba(255, 241, 221, 1)'
            sx={flexItemStyle}
            display={{ base: "none", md: "flex" }}>
            <Grid
              templateColumns='repeat(2, 1fr)'
              templateRows='2fr repeat(2, 1fr)'
              gap={0}
              w='100%'>
              <GridItem gridArea='2 / 1 / 3 / 3'>
                <Text textAlign='center' textStyle='heading-small'>
                  {t("products_list.make_your_own_way.name")}
                </Text>
              </GridItem>
              <GridItem gridArea='3 / 2 / 4 / 3' p='15px 10px 0'>
                <Button
                  onClick={goToAllPage}
                  rightIcon={
                    <BsArrowRight fontSize={["md", "lg", "xl", "2xl"]} />
                  }
                  bg='fuchsia'
                  color='white'
                  w='100%'
                  p='24px 20px'
                  display='flex'
                  justifyContent='space-between'
                  fontFamily='Arial'
                  fontWeight='400'
                  fontSize={["10px", "12px", "15px", "20px"]}
                  lineHeight={["18px", "20px", "22px", "24px"]}>
                  {t("products_list.make_your_own_way.btn")}
                </Button>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProductsList;
