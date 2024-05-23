// LimitProducts.js
import React from "react";
import { Box, Flex, Text, Switch } from "@chakra-ui/react";

const LimitProducts = ({ isCheckedSettings, setIsCheckedSettings }) => {
  return (
    <Box className='settings-products'>
      <Text textStyle='headline-small'>Settings</Text>
      <Flex alignItems='center' gap={4}>
        <Switch
          name='switchLimit'
          isChecked={isCheckedSettings}
          onChange={() => setIsCheckedSettings(!isCheckedSettings)}
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
