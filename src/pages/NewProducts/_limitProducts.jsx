import React, { useState } from "react";
import {
  Link as ChakraLink,
  Box,
  Container,
  Flex,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Switch,
} from "@chakra-ui/react";

const LimitProducts = () => {
  const [isCheckedSettings, setIsCheckedSettings] = useState(false);

  const handleSittingsChange = () => {
    setIsCheckedSettings(!isCheckedSettings);
  };
  return (
    <Box className='settings-products'>
      <Text textStyle='headline-small'>Settings</Text>
      <Flex alignItems='center' gap={4}>
        <Switch
          isChecked={isCheckedSettings}
          onChange={handleSittingsChange}
          size='lg'
          m='30px 0'
          sx={{
            ".chakra-switch__track": {
              backgroundColor: isCheckedSettings ? "#B23386" : "black",
            },
          }}
        />
        <Text
          color='#7E88A4'
          fontWeight='400'
          fontSize='20px'
          lineHeight='22px'>
          Limit product sales
        </Text>
      </Flex>
    </Box>
  );
};

export default LimitProducts;
