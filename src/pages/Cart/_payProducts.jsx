import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import ModalDialog from "../../components/modalDialog";
import { useTranslation } from "react-i18next";

const PayProducts = ({ selectedProducts, data }) => {
  const { t } = useTranslation();

  const selectedProductNames = selectedProducts.map((productId) => {
    const product = data.find((p) => p.id === productId);
    return product ? product.name : null;
  });

  const totalPrice = selectedProducts.reduce((acc, productId) => {
    const product = data.find((p) => p.id === productId);
    return acc + parseFloat(product.price);
  }, 0);

  return (
    <Box
      p='30px 15px'
      bg='white'
      minH='314px'
      m='20px'
      borderRadius='10px'
      fontFamily='Arial'
      fontWeight='400'
      fontSize='25px'
      display='flex'
      flexDirection='column'
      color={selectedProducts.length > 0 ? "#000" : "#847C7C"}>
      <Flex justify='space-between'>
        <Text> {t("cart.total")}</Text>
        <Text>${totalPrice.toFixed(2)}</Text>
      </Flex>
      <Text mt='20px'> {t("cart.products")}</Text>
      {selectedProductNames.map((productName, index) => (
        <Text key={index} fontWeight='500' fontSize='16px'>
          {productName}
        </Text>
      ))}
      <Box mt='auto'>
        <ModalDialog
          openButton={
            <Button
              fontFamily='Arial'
              fontWeight='400'
              fontSize='25px'
              padding='24px'
              w='100%'
              isDisabled={selectedProducts.length === 0}
              bg={selectedProducts.length > 0 ? "#B23386" : "#D5D7DB"}
              color={selectedProducts.length > 0 ? "#fff" : "#847C7C"}>
              {t("cart.pay")}
            </Button>
          }>
          <Box p='20px'>
            <Text fontSize='24px' fontWeight='400'>
              {t("cart.contact_seller_2")}
            </Text>
          </Box>
        </ModalDialog>
      </Box>
    </Box>
  );
};

export default PayProducts;
