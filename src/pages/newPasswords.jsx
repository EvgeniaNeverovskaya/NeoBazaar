import React, {useState} from "react";
import { useForm } from "react-hook-form";
import LoginSquares from "../components/LogInSignUp/loginSquares";
import HeaderLogIn from "../components/LogInSignUp/headerLogIn";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { inputStyle } from "../components/LogInSignUp/formSignUp";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Box,
  Container,
  FormControl,
  Tooltip,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Link as ChakraLink,
  Button,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";

const NewPasswords = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");
  const passwordConfirmation = watch("passwordConfirmation");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

            <Box as="form" onSubmit={handleSubmit(onSubmit)} display='flex' flexDirection='column' gap={8}>
            
            <FormControl isInvalid={!!errors.reset_password_token}>
                     <Input
              id='token'
              type='text'
              placeholder='Token'
              sx={inputStyle}
              {...register("reset_password_token", {
                required: "Token is required.",
              })}
            />
          <FormErrorMessage>
            {errors.reset_password_token && errors.reset_password_token.message}
          </FormErrorMessage>
        </FormControl>
            
            <FormControl isInvalid={!!errors.password}>
          <InputGroup>
            <Tooltip hasArrow  bg='fuchsia' placement='right'
              label={
                <span>
                  Password requirements: Minimum 8, maximum 30 characters. Supports Latin letters, numbers, special characters "! ? - _ .". Must include at least one digit, one lowercase letter, and one uppercase letter.
                </span>
              }
              aria-label='password-tooltip'>
              <Input
                id='password'
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                autoComplete='new-password'
                sx={inputStyle}
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Password cannot exceed 30 characters.",
                  },
                  validate: {
                    containsDigit: (value) =>
                      /\d/.test(value) ||
                      "Password must contain at least one digit.",
                    containsLowercase: (value) =>
                      /[a-z]/.test(value) ||
                      "Password must contain at least one lowercase letter.",
                    containsUppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must contain at least one uppercase letter.",
                    containsSpecialChar: (value) =>
                      /[\W_\-\.]/.test(value) ||
                      "Password must contain at least one special character (!?, -, _,.)",
                  },
                })}
              />
            </Tooltip>
            <InputRightElement>
              <IconButton
                bg='transparent'
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                onClick={togglePasswordVisibility}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.passwordConfirmation}>
          <InputGroup>
            <Input
              id='passwordConfirmation'
              type={showPassword ? "text" : "password"}
              placeholder='Password Confirmation'
              autoComplete='new-password'
              {...register("passwordConfirmation", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match.",
              })}
              sx={inputStyle}
            />
            <InputRightElement>
              <IconButton
                bg='transparent'
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                onClick={togglePasswordVisibility}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.passwordConfirmation?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          width='100%'
          type='submit'
          bg='#000'
          color='#fff'
          _hover={{ bg: "#000" }}>
          Change password
        </Button>
            </Box>
            


          </Box>
          <Box margin="50px 0 100px" width="60%" display="flex" justifyContent="flex-end">
            <LoginSquares />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewPasswords;
