import React, { useContext } from 'react';
import {
  Link as ChakraLink,
  Flex,
  Container,
  Box,
  Icon,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import { AuthContext } from '../components/authContext';
import { useTranslation } from 'react-i18next';
import logo from '../image/logo2.png';
import LanguageMenu from './languageMenu';

const iconSizes = {
  base: '4', 
  md: '5', 
  lg: '6', 
};

const textStyleLink = (fontWeight) => ({
  fontSize: ['10px', '12px', '14px', '16px'], 
  lineHeight: ['12px', '14px', '16px', '20px'],
  fontWeight,
  textTransform: 'none', 
  fontFamily: 'Arial',
});

const Header = () => {
  const { isLoggedIn, user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToAllPage = () => {
    navigate('/All');
  };

  return (
    <Box
      as='header'
      padding={['10px','22px']}
      position='fixed'
      top={0}
      w='100%'
      zIndex='10'
      bg='white'
    >
      <Container maxW='8xl' textTransform='uppercase' padding={['0 10px','0 30px']}>
        <Flex justifyContent='space-between' alignItems='center' w='100%'>
          <Box flex='1'>
            <ChakraLink
              as={ReactRouterLink}
              to='/'
              style={{ textDecoration: 'none' }}
            >
              <Flex alignItems='center'>
                <Image src={logo} alt='Logo' boxSize={['30px', '35px', '40px', '50px']} />
                <Box
                  marginLeft='20px'
                  fontWeight='500'
                  fontSize={['14px', '17px', '20px', '30px']}
                  lineHeight='35.8px'
                  display={{ base: 'none', md: 'block' }}
                >
                  NEOBAZAAR
                </Box>
              </Flex>
            </ChakraLink>
          </Box>

          <Box flex='2' textAlign='center' display={{ base: 'none', md: 'block' }}>
            <Flex direction='row' gap='40px' justifyContent='center'>
              <ChakraLink
                as={ReactRouterLink}
                to='/about-us'
                sx={textStyleLink(400)}
              >
                {t('header.about_us')}
              </ChakraLink>
              <ChakraLink onClick={goToAllPage} sx={textStyleLink(400)}>
                {t('header.catalog')}
              </ChakraLink>
            </Flex>
          </Box>

          <Box flex='1' textAlign='right'>
            <Flex alignItems='center' justifyContent='flex-end'>
              <LanguageMenu />
              
              <Menu>
                <MenuButton
                  as={Button}
                  variant='ghost'
                  aria-label='Options'
                  icon={<FaBars />}
                  display={{ base: 'block', md: 'none' }}
                  ml={["0", "10px"]}
                  padding="0"
                  textAlign='center'
                >
                  <Icon as={FaBars} boxSize={iconSizes.base} />
                </MenuButton>
                <MenuList>
                  {isLoggedIn && (
                    <>
                      <MenuItem as={ReactRouterLink} to='/products'>
                        <Icon as={FaUser} mr='8px' boxSize={iconSizes.base} />
                        {t('header.profile')}
                      </MenuItem>
                      <MenuDivider />
                    </>
                  )}
                  <MenuItem onClick={goToAllPage}>
                    {t('header.catalog')}
                  </MenuItem>
                  <MenuItem as={ReactRouterLink} to='/about-us' textTransform='none'>
                    {t('header.about_us')}
                  </MenuItem>
                  {isLoggedIn && (
                    <MenuItem onClick={handleLogout}>
                      {t('header.logout')}
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>

              {isLoggedIn ? (
                <ChakraLink
                  sx={textStyleLink(700)}
                  as={ReactRouterLink}
                  to='/cart'
                  marginLeft='20px'
                  _hover={{ textDecoration: 'underline' }}
                >
                  <Icon as={FaShoppingCart} boxSize={iconSizes.base} />
                </ChakraLink>
              ) : (
                <ChakraLink
                  sx={textStyleLink(700)}
                  textStyle='button-medium'
                  fontSize='16px'
                  as={ReactRouterLink}
                  to='/log-in'
                >
                  {t('header.login')}
                </ChakraLink>
              )}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
