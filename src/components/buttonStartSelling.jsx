import React, { useContext } from "react";
import { Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";
import { useTranslation } from "react-i18next";

const ButtonStartSelling = () => {
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
        m={{base: '5px 0', md:'20px 0'}}
        onClick={handleButtonClick}
        bg='rgba(178, 51, 134, 1)'
        p={["12px 20px", "16px 30px", "20px 50px", "24px 65px"]}
        color='#fff'
        borderRadius='10px'
        fontSize={["12px", "14px", "16px", "20px"]}
        fontFamily='Arial'
        lineHeight='23px'
        fontWeight='400'>
        {t("startSelling.start_selling")}
      </Button>
    </Center>
  );
};

export default ButtonStartSelling;
