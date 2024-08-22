import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Box } from '@chakra-ui/react';
import { GB, RU } from 'country-flag-icons/react/3x2';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const textStyle = {
  fontSize: ["12px", "14px", "16px", "20px"],
  fontWeight: '500',
  pr: ["20px", "20px", "50px", "50px"], // Убираем паддинг для base
}

const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguageIcon =
    i18n.language === 'en' ? (
      <GB title='English' style={{ width: '28px', height: 'auto' }} />
    ) : (
      <RU title='Russian' style={{ width: '28px', height: 'auto' }} />
    );

  return (
    <Menu>
      {({ isOpen }) => (
        <Box position='relative'>
          <MenuButton
            as={Button}
            bg='white'
            border='none'
            rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
            _hover={{ bg: 'gray.100' }}
            _expanded={{ bg: 'gray.200' }}
            _focus={{ boxShadow: 'none' }}
          >
            <Box display='flex' alignItems='center'>
              {currentLanguageIcon}
            </Box>
          </MenuButton>
          <MenuList
            minW='min-content'
            padding='0'
            borderRadius={4}
            position='absolute'
            right='-84px'
          >
            <MenuItem
              sx={textStyle}
              _hover={{ bg: 'gray.100' }}
              icon={<GB title='English' style={{ width: '24px', height: 'auto' }} />}
              onClick={() => changeLanguage('en')}
            >
              En
            </MenuItem>
            <MenuItem
              sx={textStyle}
              _hover={{ bg: 'gray.100' }}
              icon={<RU title='Russian' style={{ width: '24px', height: 'auto' }} />}
              onClick={() => changeLanguage('ru')}
            >
              Ru
            </MenuItem>
          </MenuList>
        </Box>
      )}
    </Menu>
  );
};

export default LanguageMenu;
