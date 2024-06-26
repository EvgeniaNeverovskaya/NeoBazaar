import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Container,
  Text,
  Button,
  Link as ChakraLink,
  FormControl,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import LoginSquares from "../components/LogInSignUp/loginSquares";
import HeaderLogIn from "../components/LogInSignUp/headerLogIn";
import { Link as ReactRouterLink } from "react-router-dom";
import { inputStyle } from "../components/LogInSignUp/formSignUp";
import { useTranslation } from "react-i18next";

const ResetPasswords = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box as='section' bgColor='green-black' w='100vw' h='100vh' overflow='auto'>
      <HeaderLogIn />
      <Container maxW='8xl' padding='0 30px'>
        <Box display='flex' margin='50px auto'>
          <Box width='40%'>
            <Box
              display='flex'
              flexDirection='column'
              gap='10px'
              alignItems='center'
              margin='40px 0'>
              <Text fontWeight='500' fontSize='80px'>
                {t("login.hi_there")}
              </Text>
              <Text textStyle='body-small' margin='5px 0'>
                {t("login.no_account")}
                <ChakraLink
                  as={ReactRouterLink}
                  to='/sign-up'
                  textStyle='button-medium'
                  color='#fff'
                  padding='0 5px'>
                  {t("login.sign_up")}
                </ChakraLink>
              </Text>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <FormControl id='Email' isInvalid={!!errors.email}>
                <Input
                  id='Email'
                  type='text'
                  placeholder={t("login.email_placeholder")}
                  sx={inputStyle}
                  mt='50px'
                  {...register("email", {
                    required: t("login.email_required"),
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._-]{1,64}@[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,63}$/,
                      message: t("login.email_pattern"),
                    },
                    maxLength: {
                      value: 192,
                      message: t("login.email_max_length"),
                    },
                  })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <Button
                width='100%'
                type='submit'
                bg='#000'
                color='#fff'
                mt='30px'
                _hover={{ bg: "#000" }}>
                  {t("reset_link")}
              </Button>
            </form>
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

export default ResetPasswords;
