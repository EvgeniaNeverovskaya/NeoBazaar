import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
            placeholder={t('form.username')}
            sx={inputStyle}
            maxLength='30'
            {...register("username", {
              required: t('form.errors.username_required'),
            })}
          />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>

        <FormControl m='0 0 15px' isInvalid={!!errors.email}>
          <Input
            id='email'
            type='email'
            placeholder={t('form.email')}
            autoComplete='email'
            sx={inputStyle}
            {...register("email", {
              required: t('form.errors.email_required'),
              maxLength: {
                value: 192,
                message: t('form.errors.email_max_length'),
              },

              pattern: {
                value:
                  /^[a-zA-Z0-9._-]{1,64}@[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,63}$/,
                  message: t('form.errors.email_invalid'),
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
              label={t('form.password_requirements')}
              aria-label='email-tooltip'>
              <Input
                id='password'
                type={showPassword ? "text" : "password"}
                placeholder={t('form.password')}
                autoComplete='new-password'
                sx={inputStyle}
                {...register("password", {
                  required: t('form.errors.password_required'),
                  minLength: {
                    value: 8,
                    message: t('form.errors.password_min_length'),
                  },
                  maxLength: {
                    value: 30,
                    message: t('form.errors.password_max_length'),
                  },
                  validate: {
                    containsDigit: (value) =>
                      /\d/.test(value) || t('form.errors.password_contains_digit'),
                    containsLowercase: (value) =>
                      /[a-z]/.test(value) || t('form.errors.password_contains_lowercase'),
                    containsUppercase: (value) =>
                      /[A-Z]/.test(value) || t('form.errors.password_contains_uppercase'),
                    containsSpecialChar: (value) =>
                      /[\W_\-\.]/.test(value) || t('form.errors.password_contains_special_char'),
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
              placeholder={t('form.password_confirmation')}
              autoComplete='new-password'
              {...register("passwordConfirmation", {
                required: t('form.errors.password_confirmation_required'),
                validate: (value) =>
                  value === password || t('form.errors.password_confirmation_match'),
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
          {t('form.submit')}
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
          <FormLabel m='0 10px' fontSize='14px'>
          {t('form.agree_to')}
                      <ChakraLink
              as={ReactRouterLink}
              to='/terms-of-service'
              padding='0 5px'>
                {t('form.terms_of_service')}
            </ChakraLink>
            {t('form.and')}
            <ChakraLink
              as={ReactRouterLink}
              to='/privacy-policy'
              padding='0 5px'>
                {t('form.privacy_policy')}
            </ChakraLink>
          </FormLabel>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default FormSignUp;
