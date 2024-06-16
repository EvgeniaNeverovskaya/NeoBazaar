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
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";
import ButtonLogIn from "./buttonLogIn";
import { AuthContext } from "../authContext";

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
    <Box as='form' onSubmit={handleSubmit(onSubmit)}>
      <VStack alignItems='flex-start' gap='0'>
        <FormControl m='0 0 15px'>
          <FormLabel htmlFor='email' />
          <Input
            id='email'
            type='email'
            placeholder='E-mail'
            autoComplete='email'
            {...register("email", { required: true })}
            sx={{
              color: "black",
              bg: "white",
              border: "solid white 2px",
              "&:hover": {
                borderColor: "black",
              },
              "&:focus-visible": {
                borderColor: "black",
                boxShadow: "none",
              },
            }}
          />
        </FormControl>
        <Flex justifyContent='flex-end' width='100%'>
          <Box>
            <ChakraLink as={ReactRouterLink} to='/reset' textStyle='body-small'>
              Forgot your password?
            </ChakraLink>
          </Box>
        </Flex>
        <FormControl>
          <FormLabel htmlFor='password' />
          <InputGroup>
            <Input
              id='password'
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              autoComplete='current-password'
              {...register("password", { required: true })}
              sx={{
                color: "black",
                bg: "white",
                border: "solid white 2px",
                "&:hover": {
                  borderColor: "black",
                },
                "&:focus-visible": {
                  borderColor: "black",
                  boxShadow: "none",
                },
              }}
            />
            <InputRightElement>
              <IconButton
                bg='transparent'
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                onClick={togglePasswordVisibility}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {errorMessage && (
          <Box color='red'm='10px 0 -20px' textStyle='body-small'>
            {errorMessage}
          </Box>
        )}

        <ButtonLogIn />
      </VStack>
    </Box>
  );
};

export default FormLogIn;
