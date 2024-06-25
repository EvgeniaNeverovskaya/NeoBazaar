import React from "react";
import { Container, Text, Box, Divider, Center } from "@chakra-ui/react";
import ButtonStartTrading from "../../components/buttonStartTrading";
import { useTranslation } from "react-i18next";

const StartTrading = () => {
  const { t } = useTranslation();

  return (
    <Box as='section'>
      <Container maxW='8xl' margin='80px auto 100px' padding='0 30px'>
        <Center>
          <Text
            as='h3'
            textStyle='heading-small'
            textAlign='center'
            padding='20px'>
            {t('startTrading.trading_descriptions_1')}
            <Divider orientation='vertical' /> {t('startTrading.trading_descriptions_2')}
          </Text>
        </Center>
        <ButtonStartTrading />
      </Container>
    </Box>
  );
};

export default StartTrading;
