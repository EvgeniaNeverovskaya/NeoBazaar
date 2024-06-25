import React from "react";
import { Container, Text, Box, Divider, Center } from "@chakra-ui/react";
import ButtonStartTrading from "../../components/buttonStartTrading";

const StartTrading = () => {
  return (
    <Box as='section'>
      <Container maxW='8xl' margin='80px auto 100px' padding='0 30px'>
        <Center>
          <Text
            as='h3'
            textStyle='heading-small'
            textAlign='center'
            padding='20px'>
            Share your work.
            <Divider orientation='vertical' /> Someone out there needs it.
          </Text>
        </Center>
        <ButtonStartTrading />
      </Container>
    </Box>
  );
};

export default StartTrading;
