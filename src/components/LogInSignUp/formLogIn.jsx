import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { Link as ReactRouterLink } from "react-router-dom";
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
  Flex,
} from "@chakra-ui/react";
import ButtonLogIn from "./buttonLogIn";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormLogIn = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <ChakraLink textStyle='body-small'>
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
        <Checkbox
          
          sx={{
            ".chakra-checkbox__control": {
              backgroundColor: "transparent",
              borderColor: "black",                
              textStyle: "body-small",
              margin: '15px 0',
              _checked: {
                backgroundColor: "transparent",
                borderColor: "black",
                color: "black",
              },
            },
          }}>
          Remember me
        </Checkbox>
        <ButtonLogIn />
      </VStack>
      
    </Box>
  );
};

export default FormLogIn;
