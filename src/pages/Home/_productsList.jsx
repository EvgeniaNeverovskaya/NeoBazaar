import React from "react";
import Arrow from "../../image/Arrow.png";
import Arrow2 from "../../image/Arrow2.png"
import {
  Box,
  Container,
  Text,
  List,
  ListItem,
  Flex,
  Button,
  Image,
  Icon,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { Md3DRotation } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { SiAudiomack } from "react-icons/si";
import { useNavigate } from 'react-router-dom';



const flexItemStyle = {
  flexBasis: "calc(50% - 15px)",
  height: "calc(50% - 20px)",
  margin: "15px 0",
  blockSize: "368px",
  borderRadius: "20px",
  padding: "35px",
};

const posAbsolute = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "28px",
  minWidth: "280px",
  minHeight: "153px",
  textAlign: "center",
  lineHeight: "153px",
};

const ProductsList = () => {
  const navigate = useNavigate();
  const goToAllPage = () => {
    navigate('/All');
  };
  
  return (
    <Box as='section' p='25px' position='relative'>
      <Container maxW='8xl' padding='0 30px'>
        <Box bg='rgba(178, 51, 134, 1)' style={posAbsolute}>
          <Image
            src={Arrow}
            style={{
              position: "absolute",
              bottom: "100%",
              left: "100%",
              transform: "rotate(0deg)",
            }}
            size={50}
          />
          <Image
            src={Arrow2}
            style={{
              position: "absolute",
              bottom: "-45%",
              left: "100%",
              transform: "rotate(0deg)",
            }}
            size={50}
          />
          <Image
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
            src={Arrow}
            style={{
              position: "absolute",
              bottom: "100%",
              left: "-25%",
              transform: "rotate(250deg)",
            }}
            size={50}
          />

          <Icon
            as={Md3DRotation}
            boxSize={10}
            style={{
              position: "absolute",
              bottom: "110%",
              left: "-50%",
              transform: "rotate(0deg)",
            }}
          />
          <Icon
            as={CiFaceSmile}
            boxSize={12}
            style={{
              position: "absolute",
              bottom: "135%",
              left: "130%",
              transform: "rotate(0deg)",
            }}
          />
          <Icon
            as={TbWorld}
            boxSize={12}
            style={{
              position: "absolute",
              bottom: "-65%",
              left: "-50%",
              transform: "rotate(0deg)",
            }}
          />
          <Icon
            as={SiAudiomack}
            boxSize={10}
            style={{
              position: "absolute",
              bottom: "145%",
              left: "-25%",
              transform: "rotate(0deg)",
            }}
          />

          <Text color='white' fontFamily="Arial" fontWeight="400" fontSize="25px">NEOBAZAAR</Text>
        </Box>
        <Flex wrap='wrap' justify='space-between' align='flex-start'>
          <Box bg='rgba(255, 144, 232, 0.4)' style={flexItemStyle}>
            <Text textStyle='heading-small' mb='16px'>
              {" "}
              Sell anything{" "}
            </Text>
            <List textStyle='body-small' color='rgba(145, 101, 136, 1)'>
              <ListItem>Sell your Top 10 lists</ListItem>
              <ListItem>Sell your crypto tips</ListItem>
              <ListItem>Sell your fractal pack</ListItem>
              <ListItem>Sell your keto cookbook</ListItem>
              <ListItem>Sell your C4D scenes</ListItem>
              <ListItem>Sell your new emojis</ListItem>
              <ListItem>Seriously, sell anything!</ListItem>
            </List>
          </Box>
          <Box bg='rgba(167, 217, 212, 1)' style={flexItemStyle}>
            <Text textAlign='end' textStyle='heading-small' mb='16px'>
              Sell to anyone
            </Text>
            <Text
              textStyle='body-small'
              textAlign='right'
              color='rgba(0, 90, 78, 1)'
              textTransform='uppercase'>
              Build a loyal following with simple posts, email newsletters, and
              automated workflows. Plus let your customers pay what they want or
              choose between one-time, recurring, or fixed-length payments in
              your currency of choice.
            </Text>
          </Box>
          <Box
            bg='rgba(255, 233, 153, 1)'
            style={flexItemStyle}
            alignContent='flex-end'>
            <Text textStyle='heading-small' mb='16px'>
              Sell anywhere
            </Text>
            <Text
              textStyle='body-small'
              color='rgba(159, 137, 57, 1)'
              textTransform='uppercase'>
              Create and customize your storefront with our all-in-one platform
              or choose to use your personal site instead. With Zapier, you can
              seamlessly connect your neobazaar account to thousands of apps in
              your current stack.
            </Text>
          </Box>
          <Box
            bg='rgba(255, 144, 232, 0.4)'
            style={flexItemStyle}
            display='flex'>
            <Grid
              templateColumns='repeat(2, 1fr)'
              templateRows='2fr repeat(2, 1fr)'
              gap={0}
              w='100%'>
              <GridItem gridArea='2 / 1 / 3 / 3'  p={4}>
                <Text textAlign='center' textStyle='heading-small' mb='16px'>
              Make your own way
            </Text>
              </GridItem>
              <GridItem gridArea='3 / 2 / 4 / 3'  p='15px 10px 0'>
                 <Button onClick={goToAllPage}
              rightIcon={<BsArrowRight fontSize="x-large" />}
              colorScheme='teal'
              w="100%"
              p="30px 20px"
              display='flex'
              justifyContent='space-between'
              fontFamily='Arial'
              fontWeight='400'
              fontSize='25px'
              lineHeight='29px'>
              Explore Features
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
