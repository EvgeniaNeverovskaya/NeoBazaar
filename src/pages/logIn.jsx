import React from "react";
import { Box, Container, Text, Link as ChakraLink } from "@chakra-ui/react";
import LoginSquares from "../components/LogInSignUp/loginSquares";
import HeaderLogIn from "../components/LogInSignUp/headerLogIn";
import FormLogIn from "../components/LogInSignUp/formLogIn";
import { Link as ReactRouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const LogIn = () => {
  const {t} = useTranslation();

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
              margin='40px 0'>
              <Text fontWeight='500' fontSize='80px'>
              {t('login.hi_there')}
              </Text>
              <Text textStyle='body-small' margin='5px 0'>
              {t('login.no_account')}
                <ChakraLink
                  as={ReactRouterLink}
                  to='/sign-up'
                  textStyle='button-medium'
                  color='#fff'
                  padding='0 5px'>
                  {t('login.sign_up')}
                </ChakraLink>
              </Text>
            </Box>
            <FormLogIn />
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

export default LogIn;
