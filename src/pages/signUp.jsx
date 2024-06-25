import React from "react";
import { Box, Container, Text, Link as ChakraLink } from "@chakra-ui/react";
import HeaderLogIn from "../components/LogInSignUp/headerLogIn";
import FormLogInSeparator from "../components/LogInSignUp/formSeparator";
import LoginSquares from "../components/LogInSignUp/loginSquares";
import FormSignUp from "../components/LogInSignUp/formSignUp";
import { Link as ReactRouterLink } from "react-router-dom";
import ButtonGoogleSignUp from "../components/LogInSignUp/buttonGoogleSignUp";

const SignUp = () => {
  return (
    <Box as='section' bgColor='green-black' w='100vw' h='100vh' overflow='auto'>
      <HeaderLogIn />
      <Container maxW='8xl' padding='0 30px'>
        <Box display='flex' margin='100px auto'>
          <Box width='40%'>
            <Box
              display='flex'
              flexDirection='column'
              gap='10px'
              alignItems='center'
              margin='20px 0'>
              <Text fontWeight='500' fontSize='60px'>
                Create your account
              </Text>

              <Text
                margin='20px 0'
                fontFamily='Arial'
                fontWeight='400'
                fontSize='16px'
                lineHeight='20px'>
                Already have an account?
                <ChakraLink
                  as={ReactRouterLink}
                  to='/log-in'
                  fontFamily='Arial'
                  fontWeight='700'
                  fontSize='16px'
                  lineHeight='20px'
                  color='#fff'
                  padding='0 5px'>
                  Log in
                </ChakraLink>
              </Text>
            </Box>
            <ButtonGoogleSignUp />
            <FormLogInSeparator />
            <FormSignUp />
          </Box>
          <Box
            margin='50px 0 100px'
            width='60%'
            display='flex'
            justifyContent='flex-end'>
            <LoginSquares />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
