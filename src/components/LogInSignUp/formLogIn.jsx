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
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";
import { AuthContext } from "../authContext";
import { inputStyle } from "./formSignUp";
import { useTranslation } from "react-i18next";

const FormLogIn = () => {
  const { t } = useTranslation();
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
            placeholder={t("form.email")}
            autoComplete='email'
            sx={inputStyle}
            {...register("email", {
              required: t("login.email_required"),
              maxLength: {
                value: 192,
                message: t("login.email_max_length"),
              },

              pattern: {
                value:
                  /^[a-zA-Z0-9._-]{1,64}@[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,63}$/,
                message: t("login.email_pattern"),
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
              {t("login.forgot_password")}
            </ChakraLink>
          </Box>
        </Flex>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor='password' />
          <InputGroup>
            <Input
              id='password'
              type={showPassword ? "text" : "password"}
              placeholder={t("login.password_placeholder")}
              autoComplete='current-password'
              {...register("password", {
                required: t("login.password_required"),
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
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        {errorMessage && (
          <Box color='red' m='10px 0 -20px' textStyle='body-small'>
            {errorMessage}
          </Box>
        )}
        <Button
          type='submit'
          bg='#000'
          p='10px 20px'
          color='#fff'
          width='100%'
          mt='30px'
          borderRadius='10px'
          fontFamily='Arial'
          fontSize='18px'
          fontWeight='700'
          lineHeight='20px'
          _hover={{ bg: "fuchsia" }}>
          {t("login.submit")}
        </Button>
      </VStack>
    </Box>
  );
};

export default FormLogIn;
