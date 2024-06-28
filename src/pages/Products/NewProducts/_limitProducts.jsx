import React from "react";
import { Box, Flex, Text, Switch, Input, FormControl } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const LimitProducts = ({
  isCheckedSettings,
  setIsCheckedSettings,
  limit,
  setLimit,
}) => {
  const { t } = useTranslation();

  const display = isCheckedSettings ? "inline-flex" : "none";
  const handleLimitChange = (value) => {
    const numericValue = Number(value);
    if (numericValue >= 0 && numericValue <= 9999) {
      setLimit(numericValue.toString());
    }
  };

  return (
    <Box className='settings-products'>
      <Text textStyle='headline-small'>{t("products.form.settings")}</Text>
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
          lineHeight='22px'
          width='20%'>
          {t("products.form.limit")}
        </Text>
        <FormControl id='limit'>
          <Input
            type='number'
            name='limit'
            placeholder={t("products.form.quantity")}
            bg='#fff'
            required
            display={display}
            value={limit}
            onChange={(e) => handleLimitChange(e.target.value)}
          />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default LimitProducts;
