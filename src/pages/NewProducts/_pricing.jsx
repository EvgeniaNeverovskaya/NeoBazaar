// Pricing.js
import React from "react";
import {
  Box,
  Flex,
  Text,
  FormControl,
  Input,
  Select,
  Switch,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";



const Pricing = ({
  amount,
  setAmount,
  currency,
  setCurrency,
  isCheckedPracing,
  setIsCheckedPracing,
  priciError,
}) => {
  const isErrorPrici = priciError && amount === "";

  const currencies = ["USD", "EUR", "RUB", "BYN"];

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    let value = event.target.value.replace(/[^0-9]/g, "");
    setAmount(value);
  };

  return (
    <Box className='pricing-product'>
      <Text textStyle='headline-small' mb='30px'>
        Pricing
      </Text>

      <Flex direction='column' alignItems='center' w='100%' gap='25px'>
      <FormControl id='currency-product'>
          <Select
            value={currency}
            onChange={handleCurrencyChange}
            bg='#fff'
            color='#7E88A4'
            placeholder='Currency'
            >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id='pricing-product' isInvalid={isErrorPrici}>
          <Input
            as={InputMask}
            mask='**.**'
            maskChar={null}
            name='pricing-product'
            placeholder='Price'
            value={amount}
            onChange={handleAmountChange}
            bg='#fff'
            required
          />
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
