import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link, Link as ReactRouterLink } from "react-router-dom";
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
  Checkbox,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      await axios.post('https://neobazaar-ee1c625c2e80.herokuapp.com/api/v1/logIn', {
        username: data.username, 
        email: data.email,
        password: data.password,
      });
      alert('Data sent successfully!');
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to send data.');
    }
  };
  
  

  return (
    <Box as='form' onSubmit={handleSubmit(onSubmit)}>
      <VStack alignItems='flex-start' spacing={2}>

        <FormControl isInvalid={!!errors.username}>
          <Input
            id='username'
            type='text'
            placeholder='User Name'
            sx={inputStyle}
            {...register("username", {
              required: "Username is required.",
              maxLength: {
                value: 30,
                message: "Username cannot exceed 30 characters."
              }
            })}          />
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
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
                message: "Please enter a valid email address."
              },
              maxLength: {
                value: 192,
                message: "Email cannot exceed 192 characters."
              },
              validate: {
                emailStructure: value => {
                  const parts = value.split('@');
                  if (parts.length!== 2) return "Email must follow the structure: local-part@domain.";
                  const localPart = parts[0];
                  const domainParts = parts[1].split('.');
                  if (localPart.length > 64 || domainParts.some(part => part.length > 63)) return "Local part and domain parts must not exceed 64 and 63 characters respectively.";
                  return true; 
                }
              }
            })}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <InputGroup>
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
                   message: "Password must be at least 8 characters long."
                 },
                 maxLength: {
                   value: 30,
                   message: "Password cannot exceed 30 characters."
                 },
                 validate: {
                   containsDigit: value => /\d/.test(value) || "Password must contain at least one digit.",
                   containsLowercase: value => /[a-z]/.test(value) || "Password must contain at least one lowercase letter.",
                   containsUppercase: value => /[A-Z]/.test(value) || "Password must contain at least one uppercase letter.",
                   containsSpecialChar: value => /[\W_\-\.]/.test(value) || "Password must contain at least one special character (!?, -, _,.)"
                 }
               })}       />
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
                  bg: "transparent",
                },
              },
            }}>
          </Checkbox>
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
