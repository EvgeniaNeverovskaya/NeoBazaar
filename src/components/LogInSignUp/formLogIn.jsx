import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  VStack,
  Link as ChakraLink,
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";
import ButtonLogIn from "./buttonLogIn";
import { AuthContext } from "../authContext";
import { inputStyle } from "./formSignUp";

const FormLogIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://neobazaar-ee1c625c2e80.herokuapp.com/login",
        {
          user: {
            email: data.email,
            password: data.password,
          },
        },
      );

      if (response.status === 200) {
        const userData = response.data.status.data.user;
        const token = response.headers.authorization;

        Cookies.set("token", token, {
          expires: 3 / 24,
          secure: true,
          sameSite: "strict",
        });

        Cookies.set("user", JSON.stringify(userData), {
          expires: 3 / 24,
          secure: true,
          sameSite: "strict",
        });
        setIsLoggedIn(true);
        setUser(userData);
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <Box as='form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <VStack alignItems='flex-start' gap='0'>
        <FormControl m='0 0 15px' isInvalid={!!errors.email}>
          <FormLabel htmlFor='email' />
          <Input
            id='email'
            type='email'
            placeholder='E-mail'
            autoComplete='email'
            sx={inputStyle}
            {...register("email", {
              required: "Email is required.",
              maxLength: {
                value: 192,
                message: "Email cannot exceed 192 characters.",
              },

              pattern: {
                value:
                  /^[a-zA-Z0-9._-]{1,64}@[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,63}$/,
                message:
                  "Please enter a valid email address (letters, numbers, ., -, _ only).",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <Flex justifyContent='flex-end' width='100%'>
          <Box>
            <ChakraLink as={ReactRouterLink} to='/reset' textStyle='body-small'>
              Forgot your password?
            </ChakraLink>
          </Box>
        </Flex>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor='password' />
          <InputGroup>
            <Input
              id='password'
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              autoComplete='current-password'
              {...register("password", { required: "Password is required." })}
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
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        {errorMessage && (
          <Box color='red' m='10px 0 -20px' textStyle='body-small'>
            {errorMessage}
          </Box>
        )}

        <ButtonLogIn />
      </VStack>
    </Box>
  );
};

export default FormLogIn;
