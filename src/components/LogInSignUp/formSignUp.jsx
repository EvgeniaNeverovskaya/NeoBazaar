import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Tooltip,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  VStack,
  Link as ChakraLink,
  Checkbox,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../authContext";

export const inputStyle = {
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
};

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const passwordConfirmation = watch("passwordConfirmation");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://neobazaar-ee1c625c2e80.herokuapp.com/signup",
        {
          user: {
            username: data.username,
            email: data.email,
            password: data.password,
          },
        },
      );

      if (response.status === 200) {
        const userData = response.data.data;
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
      <VStack alignItems='flex-start' spacing={2}>
        <FormControl isInvalid={!!errors.username}>
          <Input
            id='username'
            type='text'
            placeholder='User Name'
            sx={inputStyle}
            maxLength='30'
            {...register("username", {
              required: "Username is required.",
            })}
          />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>

        <FormControl m='0 0 15px' isInvalid={!!errors.email}>
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

        <FormControl isInvalid={!!errors.password}>
          <InputGroup>
            <Tooltip
              placement='right'
              hasArrow
              bg='fuchsia'
              label={
                <span>
                  From 8 to 30 characters. Latin letters, numbers and symbols:
                  !, ?, -, _, . Min 1 digit, 1 letter in lowercase and 1 letter
                  in uppercase{" "}
                </span>
              }
              aria-label='email-tooltip'>
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
        {errorMessage && (
          <Box color='red' m='10px 0 -20px' textStyle='body-small'>
            {errorMessage}
          </Box>
        )}

        <Button
          isDisabled={!isChecked}
          width='100%'
          type='submit'
          margin='20px 0 0'
          bg='#000'
          color='#fff'
          _hover={{ bg: "#000" }}>
          Sign Up
        </Button>
        <FormControl display='flex' alignItems='center'>
          <Checkbox
            isChecked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            sx={{
              ".chakra-checkbox__control": {
                backgroundColor: "transparent",
                borderColor: "black",
                textStyle: "body-small",
                _checked: {
                  backgroundColor: "transparent",
                  borderColor: "black",
                  color: "black",
                },
                _hover: {
                  backgroundColor: "transparent",
                },
              },
            }}></Checkbox>
          <FormLabel m='0 10px'>
            I agree to the
            <ChakraLink
              as={ReactRouterLink}
              to='/terms-of-service'
              padding='0 5px'>
              terms of service
            </ChakraLink>
            and
            <ChakraLink
              as={ReactRouterLink}
              to='/privacy-policy'
              padding='0 5px'>
              privacy policy
            </ChakraLink>
          </FormLabel>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default FormSignUp;
