import React, { useContext } from "react";
import { Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";
import { useTranslation } from "react-i18next";


const ButtonStartTrading = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/products");
    } else {
      navigate("/log-in");
    }
  };
  return (
    <Center>
      <Button
        onClick={handleButtonClick}
        bg='rgba(178, 51, 134, 1)'
        p='30px 20px'
        color='#fff'
        minW='280px'
        borderRadius='10px'
        fontSize='25px'
        fontFamily='Arial'
        lineHeight='28.75px'
        fontWeight='400'>
        {t('startTrading.start_trading')}
      </Button>
    </Center>
  );
};

export default ButtonStartTrading;
