// Pricing.js
import React from "react";
import {
  Box,
  Flex,
  Text,
  FormControl,
  Input,
  InputGroup, InputLeftElement,
  Switch,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";



const Pricing = ({
  price,
  setPrice,
  currency,
  setCurrency,
  isCheckedPracing,
  setIsCheckedPracing,
  priciError,
}) => {
  const isErrorPrici = priciError && price === "";


  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handlePriceChange = (event) => {
    let value = event.target.value.replace(/[^0-9]/g, "");
    setPrice(value);
  };

  return (
    <Box className='pricing-product'>
      <Text textStyle='headline-small' mb='30px'>
        Pricing
      </Text>

      <Flex direction='column' alignItems='center' w='100%' gap='25px'>
        <FormControl id='pricing-product' isInvalid={isErrorPrici}>
          <InputGroup>
          <InputLeftElement
          pointerEvents='none'
          color='#000'
          fontSize='18px'
          children='$'
        />
          <Input            
            as={InputMask}
            mask='**.**'
            maskChar={null}
            name='pricing-product'
            placeholder='Price'
            value={price}
            onChange={handlePriceChange}
            bg='#fff'
            required
          />
          </InputGroup>
        </FormControl>
       
      </Flex>
      <Flex alignItems='center' gap={4}>
        <Switch
          name='switchPricing'
          isChecked={isCheckedPracing}
          onChange={() => setIsCheckedPracing(!isCheckedPracing)}
          size='lg'
          m='30px 0'
          sx={{
            ".chakra-switch__track": {
              backgroundColor: isCheckedPracing ? "#B23386" : "black",
            },
          }}
        />
        <Text
          color='#7E88A4'
          fontWeight='400'
          fontSize='20px'
          lineHeight='22px'>
          Allow customers to pay what they want
        </Text>
      </Flex>
    </Box>
  );
};

export default Pricing;
