import React from "react";
import { Button, Center } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";


const ButtonLogIn = () => {
  return (
      <Button type="submit"
        bg='#000'
        p='10px 20px'
        color='#fff'
        width='100%' 
        borderRadius='10px'
        fontFamily= "Arial"
        fontSize= "18px"
        fontWeight= "700"
        lineHeight= "20px"
        _hover={{ bg: "fuchsia" }}
        m='15px 0'
        >
        Log in
      </Button>
  );
};

export default ButtonLogIn;
