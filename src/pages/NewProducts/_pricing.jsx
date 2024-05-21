import React, { useState } from "react";
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

const Pricing = () => {
  const [isCheckedPracing, setIsCheckedPracing] = useState(false);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD"); // Default currency
  const currencies = ["USD", "EUR", "RUB", "BYN"]; // Add more currencies as needed

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handlePracingChange = () => {
    setIsCheckedPracing(!isCheckedPracing);
  };

  const handleAmountChange = (event) => {
    let value = event.target.value.replace(/[^0-9]/g, ""); // Remove non-digit characters
    setAmount(value);
  };
  return (
    <Box className='pricing-product'>
      <Text textStyle='headline-small' mb='30px'>
        Pricing
      </Text>

      <FormControl id='pricing-product'>
        <Flex direction='row' alignItems='center'>
          <Input
            as={InputMask}
            mask='**.**'
            maskChar={null}
            name='pricing-product'
            placeholder='Amount'
            value={amount}
            onChange={handleAmountChange}
            bg='#fff'
            required
          />
          <Select
            width='100px'
            value={currency}
            onChange={handleCurrencyChange}
            bg='#fff'>
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </Select>
        </Flex>
      </FormControl>
      <Flex alignItems='center' gap={4}>
        <Switch
          isChecked={isCheckedPracing}
          onChange={handlePracingChange}
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
