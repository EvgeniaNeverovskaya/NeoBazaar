import React from "react";
import ButtonStartSelling from "../../components/buttonStartSelling";
import { Container, Text, Box, Divider, Center } from "@chakra-ui/react";

const StartSelling = () => {
  return (
    <Box as='section'>
      <Container maxW='8xl' margin='150px auto' padding='0 30px'>
        <Center>
          <Text as='h3' textStyle='heading-small' textAlign="center" padding="20px">
            Share your work.<Divider orientation='vertical'/> Someone out there needs it.
          </Text>
        </Center>
        <ButtonStartSelling />
      </Container>
    </Box>
  );
};

export default StartSelling;
