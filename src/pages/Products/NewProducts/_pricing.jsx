import React from "react";
import {
  Box,
  Flex,
  Text,
  FormControl,
  Input,
  InputGroup, InputLeftElement,
  Switch,
  FormErrorMessage
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useTranslation } from "react-i18next";



const Pricing = ({
  price,
  setPrice,
  isCheckedPracing,
  setIsCheckedPracing,
  priciError,
}) => {
  const {t} = useTranslation();

  const isErrorPrici = priciError && price === "";



  const handlePriceChange = (event) => {
    let value = event.target.value.replace(/[^0-9]/g, "");
    setPrice(value);
  };

  return (
    <Box className='pricing-product'>
      <Text textStyle='headline-small' mb='30px'>
        {t("products.form.pricing")}
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
            placeholder=        {t("products.form.price")}

            value={price}
            onChange={handlePriceChange}
            bg='#fff'
            required
          />
          </InputGroup>
          {isErrorPrici && (
        <FormErrorMessage>{t("products.form.price_error")}</FormErrorMessage>
      )}
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
        {t("products.form.any_price")}
        </Text>
      </Flex>
    </Box>
  );
};

export default Pricing;
