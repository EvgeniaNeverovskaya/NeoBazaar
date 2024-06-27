import React from "react";
import {
  Center,
  Text,
  Box,
  Container,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

function makeLink(email) {
  return (
    <a
      href={`mailto:${email}`}
      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}>
      {email}
    </a>
  );
}

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Box as='section' p='50px' color='rgba(0, 90, 78, 1)'>
        <Container maxW='8xl'>
          <Center>
            <Text as='h2' margin='50px 0' textStyle='heading-small'>
              {t("terms_of_use.title")}
            </Text>
          </Center>
          <Box
            className='main-container'
            textStyle='body-small'
            padding='0 30px'>
            <Text className='website'>
              {t("terms_of_use.introduction")}
              <ChakraLink as={ReactRouterLink} to='/'>
                
                https://neobazaar1-20185008ae61.herokuapp.com/
              </ChakraLink>
               {t("terms_of_use.platform_description")}
              {makeLink("neodigitalbazaar@gmail.com")}
              {t("terms_of_use.contact_email")}
            </Text>
            <Text textStyle='body-h3' margin='40px 0 15px'>
              {t("terms_of_use.content_title")}
            </Text>
            <Text>{t("terms_of_use.content_description")}</Text>
            <Text mt={4}>{t("terms_of_use.content_point1")}</Text>
            <Text mt={4}>{t("terms_of_use.content_point2")}</Text>
            <Text mt={4}> {t("terms_of_use.content_point3")}</Text>
            <Text mt={4}> {t("terms_of_use.content_point4")}</Text>

            <Text mt={4}>{t("terms_of_use.content_clause")} </Text>
            <Text mt={4}>
              {t("terms_of_use.content_responsibility")}{" "}
              {makeLink("neodigitalbazaar@gmail.com")}
            </Text>
            <Text
              className='changes-to-terms'
              textStyle='body-h3'
              margin='40px 0 15px'>
              {t("terms_of_use.personal_data_title")}
            </Text>

            <Text>
              {t("terms_of_use.personal_data_description_1")}
              <ChakraLink as={ReactRouterLink} to='/privacy-policy'>
              {t("terms_of_use.privacy_policy")}

              </ChakraLink>
              ,{t("terms_of_use.personal_data_description_2")}
            </Text>
            <Text
              className='changes-to-terms'
              textStyle='body-h3'
              margin='40px 0 15px'>
              {t("terms_of_use.using_platform_title")}
            </Text>
            <Text mt={4}>{t("terms_of_use.using_platform_description")}</Text>
            <Text mt={4}>{t("terms_of_use.using_platform_clause_1")}</Text>
            <Text mt={4}>
              {t("terms_of_use.using_platform_clause_2")}
              {makeLink("neodigitalbazaar@gmail.com")}
            </Text>
            <Text
              className='changes-to-terms'
              textStyle='body-h3'
              margin='40px 0 15px'>
              {t("terms_of_use.dispute_resolution_title")}
            </Text>
            <Text>
              {t("terms_of_use.dispute_resolution_description_1")}
              {makeLink("neodigitalbazaar@gmail.com")}
              {t("terms_of_use.dispute_resolution_description_2")}
            </Text>
            <Text
              className='changes-to-terms'
              textStyle='body-h3'
              margin='40px 0 15px'>
              {t("terms_of_use.intellectual_property_title")}
            </Text>
            <Text mt={4}>
              {t("terms_of_use.intellectual_property_description")}
            </Text>
            <Text mt={4}>
              {t("terms_of_use.intellectual_property_clause_1")}
            </Text>
            <Text mt={4}>
              {t("terms_of_use.intellectual_property_clause_2")}
              {makeLink("neodigitalbazaar@gmail.com")}
            </Text>
            <Text
              className='changes-to-terms'
              textStyle='body-h3'
              margin='40px 0 15px'>
              {t("terms_of_use.changes_to_terms_title")}
            </Text>
            <Text mt={4}>
              {t("terms_of_use.changes_to_terms_description_1")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("terms_of_use.changes_to_terms_description_2")}
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TermsOfService;
