import React from "react";
import { Button, Center } from "@chakra-ui/react";

const ButtonStartSelling = () => {
  return (
    <Center>
      <Button
        bg='rgba(178, 51, 134, 1)'
        p='30px 20px'
        color='#fff'
        minW='280px'
        borderRadius='10px'
        fontSize="25px"
        fontFamily="Arial"
        lineHeight="28.75px"
        fontWeight="400"
        >
        Start selling
      </Button>
    </Center>
  );
};

export default ButtonStartSelling;
