import React, { useContext } from "react";
import {
  Link as ChakraLink,
  Flex,
  Container,
  Box,
  List,
  ListItem,
  Icon,
  Button,
  Switch
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../components/authContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { isLoggedIn, user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const goToAllPage = () => {
    navigate("/All");
  };

  return (
    <Box
      as='header'
      padding='22px'
      position='fixed'
      top={0}
      w='100%'
      zIndex='10'
      bg='white'>
      <Container maxW='8xl' textTransform='uppercase' padding='0 30px'>
        <Flex justifyContent='space-between' alignItems='center'>
          <ChakraLink
            as={ReactRouterLink}
            to='/'
            style={{ textDecoration: "none" }}
            fontWeight='500'
            fontSize='30px'
            lineHeight='35.8px'>
            {t('header.NEOBAZAAR')}
          </ChakraLink>
          <List textStyle='button-small'>
            <Flex direction='row' gap='40px'>
              <ListItem>
                <ChakraLink as={ReactRouterLink} to='/about-us'>
                  {t('header.about_us')}
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink onClick={goToAllPage}>{t('header.catalog')}</ChakraLink>
              </ListItem>
            </Flex>
          </List>

          
          <Flex alignItems='center'>
            <Button onClick={() => changeLanguage('en')}>EN</Button>
            <Button onClick={() => changeLanguage('ru')} marginLeft='10px'>RU</Button>
          </Flex>

          {isLoggedIn ? (
            <Flex alignItems='center'>
              <ChakraLink
                as={ReactRouterLink}
                to='/products'
                title={user ? user.username : ""}
                _hover={{ textDecoration: "underline" }}>
                <Icon as={FaUser} boxSize={6} />
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to='/cart'
                marginLeft='20px'
                _hover={{ textDecoration: "underline" }}>
                <Icon as={FaShoppingCart} boxSize={6} />
              </ChakraLink>
              <ChakraLink
                onClick={handleLogout}
                textStyle='button-medium'
                marginLeft='20px'
                cursor='pointer'>
                {t('header.logout')}
              </ChakraLink>
            </Flex>
          ) : (
            <ChakraLink
              textStyle='button-medium'
              as={ReactRouterLink}
              to='/log-in'>
              {t('header.login')}
            </ChakraLink>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
