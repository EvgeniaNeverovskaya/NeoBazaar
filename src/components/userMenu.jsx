import React from "react";
import { Link as ChakraLink, Box, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const buttonStyle = {
  bg: "rgba(210, 122, 179, 1)",
  color: "white",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  padding: "20px",
  minWidth: "154px",
  _hover: {
    color: "black",
  },
};

const UserMenu = () => {
  const { t  } = useTranslation();

  return (
    <Box
      bg='fuchsia'
      color='white'
      width='330px'
      h='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      position='fixed'
      zIndex='10'>
      <Box
        className='user-menu'
        display='flex'
        flexDirection='column'
        gap='30px'
        alignItems='center'
        justifyContent='center'
        position='sticky'>
        <ChakraLink
          as={ReactRouterLink}
          to='/products'
          style={{ textDecoration: "none" }}>
          <Button sx={buttonStyle}>{t('user_menu.my_products')}</Button>
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to='/cart'
          style={{ textDecoration: "none" }}>
          <Button sx={buttonStyle}>{t('user_menu.cart')}</Button>
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to='/profile'
          style={{ textDecoration: "none" }}>
          <Button sx={buttonStyle}>{t('user_menu.profile')}</Button>
        </ChakraLink>
      </Box>
    </Box>
  );
};

export default UserMenu;
