import React from "react";
import { useForm } from "react-hook-form";
import { Box, Container, Text, Button, Link as ChakraLink, FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import LoginSquares from "../components/LogInSignUp/loginSquares";
import HeaderLogIn from "../components/LogInSignUp/headerLogIn";
import { Link as ReactRouterLink } from "react-router-dom";
import { inputStyle } from "../components/LogInSignUp/formSignUp";

const ResetPasswords = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box as="section" bgColor="green-black" w="100vw" h="100vh" overflow="auto">
      <HeaderLogIn />
      <Container maxW="8xl" padding="0 30px">
        <Box display="flex" margin="50px auto">
          <Box width="40%">
            <Box
              display="flex"
              flexDirection="column"
              gap="10px"
              alignItems="center"
              margin="40px 0">
              <Text fontWeight="500" fontSize="80px">
                Hi there!
              </Text>
              <Text textStyle="body-small" margin="5px 0">
                Don’t have an account?
                <ChakraLink
                  as={ReactRouterLink}
                  to="/sign-up"
                  textStyle="button-medium"
                  color="#fff"
                  padding="0 5px">
                  Sign up
                </ChakraLink>
              </Text>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="Email" isInvalid={!!errors.email}>
                <Input
                  id="Email"
                  type="text"
                  placeholder="Email"
                  sx={inputStyle}
                  mt='50px'
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
                        message: "Please enter a valid email address."
                      },
                    maxLength: {
                      value: 30,
                      message: "There is no account with this email address",
                    },
                  })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <Button
                width="100%"
                type="submit"
                bg="#000"
                color="#fff"
                mt='30px'
                _hover={{ bg: "#000" }}>
                Reset link
              </Button>
            </form>
          </Box>
          <Box margin="50px 0 100px" width="60%" display="flex" justifyContent="flex-end">
            <LoginSquares />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ResetPasswords;
