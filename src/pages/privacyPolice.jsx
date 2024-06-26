import React from "react";
import {
  Container,
  Box,
  Center,
  Text,
  ListItem,
  List,
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
      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
    >
      {email}
    </a>
  );
}

const PrivacyPolice = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Box as='section' p='50px' color='rgba(0, 90, 78, 1)'>
        <Container maxW='8xl' padding='0 30px'>
          <Center>
            <Text as='h2' margin='50px 0' textStyle='heading-small'>
              {t("privacy_policy.title")}
            </Text>
          </Center>
          <Box textStyle='body-small'>
            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.general_provisions.title")}
            </Text>
            <Text>{t("privacy_policy.general_provisions.text_1")}</Text>
            <Text mt={4}>{t("privacy_policy.general_provisions.text_2")}</Text>
            <Text mt={4}>
              {t("privacy_policy.general_provisions.text_3")}
              <ChakraLink as={ReactRouterLink} to='/'>
                {" "}
                https://neobazaar1-20185008ae61.herokuapp.com/.{" "}
              </ChakraLink>
            </Text>
            <Text mt={4}> {t("privacy_policy.general_provisions.text_4")}</Text>
            <Text mt={4}>{t("privacy_policy.general_provisions.text_5")}</Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.basic_concepts.title")}
            </Text>
            <Text mt={4}>{t("privacy_policy.basic_concepts.text_1")}</Text>
            <Text mt={4}>{t("privacy_policy.basic_concepts.text_2")}</Text>
            <Text mt={4}>
              {t("privacy_policy.basic_concepts.text_3")}

              <ChakraLink as={ReactRouterLink} to='/'>
                {" "}
                https://neobazaar1-20185008ae61.herokuapp.com/.{" "}
              </ChakraLink>
            </Text>
            <Text mt={4}>{t("privacy_policy.basic_concepts.text_4")}</Text>
            <Text mt={4}> {t("privacy_policy.basic_concepts.text_5")}</Text>
            <Text mt={4}>{t("privacy_policy.basic_concepts.text_6")}</Text>
            <Text mt={4}> {t("privacy_policy.basic_concepts.text_7")}</Text>
            <Text mt={4}>
              {t("privacy_policy.basic_concepts.text_8")}

              <ChakraLink as={ReactRouterLink} to='/'>
                {" "}
                https://neobazaar1-20185008ae61.herokuapp.com/.{" "}
              </ChakraLink>
            </Text>
            <Text mt={4}>{t("privacy_policy.basic_concepts.text_9")}</Text>
            <Text mt={4}>
              {t("privacy_policy.basic_concepts.text_10")}
              <ChakraLink as={ReactRouterLink} to='/'>
                {" "}
                https://neobazaar1-20185008ae61.herokuapp.com/
              </ChakraLink>{" "}
            </Text>
            <Text mt={4}> {t("privacy_policy.basic_concepts.text_11")}</Text>
            <Text mt={4}>{t("privacy_policy.basic_concepts.text_12")}</Text>
            <Text mt={4}>{t("privacy_policy.basic_concepts.text_13")}</Text>
            <Text mt={4}>{t("privacy_policy.basic_concepts.text_14")}</Text>
            <Text mt={4}>{t("privacy_policy.basic_concepts.text_15")}</Text>
            <Text mt={4}>{t("privacy_policy.basic_concepts.text_16")}</Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.operator_rights_and_obligations.title")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.operator_rights_and_obligations.text_1")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_2")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_3")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_4")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.operator_rights_and_obligations.text_5")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_6")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_7")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_8")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_9")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_10")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_11")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_12")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_13")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.operator_rights_and_obligations.text_14")}
            </Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.data_subject_rights_and_obligations.title")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.data_subject_rights_and_obligations.text_1")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.data_subject_rights_and_obligations.text_2")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.data_subject_rights_and_obligations.text_3")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.data_subject_rights_and_obligations.text_4")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.data_subject_rights_and_obligations.text_5")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.data_subject_rights_and_obligations.text_6")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.data_subject_rights_and_obligations.text_7")}{" "}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.data_subject_rights_and_obligations.text_8")}{" "}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.data_subject_rights_and_obligations.text_9")}{" "}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.data_subject_rights_and_obligations.text_10")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.data_subject_rights_and_obligations.text_11")}
            </Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.list_of_personal_data.title")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.list_of_personal_data.text_1")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.list_of_personal_data.text_2")}
              <ChakraLink as={ReactRouterLink} to='/'>
                {" "}
                https://neobazaar1-20185008ae61.herokuapp.com/.{" "}
              </ChakraLink>{" "}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.list_of_personal_data.text_3")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.list_of_personal_data.text_4")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.list_of_personal_data.text_5")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.list_of_personal_data.text_6")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.list_of_personal_data.text_7")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.list_of_personal_data.text_8")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.list_of_personal_data.text_9")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.list_of_personal_data.text_10")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.list_of_personal_data.text_11")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.list_of_personal_data.text_12")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.list_of_personal_data.text_13")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.list_of_personal_data.text_14")}
            </Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.principles_of_processing.title")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.principles_of_processing.text_1")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.principles_of_processing.text_2")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.principles_of_processing.text_3")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.principles_of_processing.text_4")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.principles_of_processing.text_5")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.principles_of_processing.text_6")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.principles_of_processing.text_7")}
            </Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.purposes_of_processing.title")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_1")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.purposes_of_processing.text_2")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_3")}
            </Text>
            <Text mt={4}>
              {" "}
              {t("privacy_policy.purposes_of_processing.text_4")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_5")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_6")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_7")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_8")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_9")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_10")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_11")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_12")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_13")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.purposes_of_processing.text_14")}
            </Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.legal_bases_of_processing.title")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.legal_bases_of_processing.text_1")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.legal_bases_of_processing.text_2")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.legal_bases_of_processing.text_3")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.legal_bases_of_processing.text_4")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.legal_bases_of_processing.text_5")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.legal_bases_of_processing.text_6")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.legal_bases_of_processing.text_7")}
            </Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.procedures_and_conditions.title")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.procedures_and_conditions.text_1")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.procedures_and_conditions.text_2")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.procedures_and_conditions.text_3")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.procedures_and_conditions.text_4")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.procedures_and_conditions.text_5")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.procedures_and_conditions.text_6")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.procedures_and_conditions.text_7")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.procedures_and_conditions.text_8")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.procedures_and_conditions.text_9")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.procedures_and_conditions.text_10")}
            </Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.updating_rectification_and_deletion.title")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.updating_rectification_and_deletion.text_1")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.updating_rectification_and_deletion.text_2")}
            </Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.cross_border_transfer.title")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.cross_border_transfer.text_1")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.cross_border_transfer.text_2")}
            </Text>

            <Text textStyle='body-h3' m='40px 0 20px'>
              {t("privacy_policy.privacy_policy_terms.title")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.privacy_policy_terms.text_1")}
            </Text>
              <Text textStyle='body-h3' m='40px 0 20px'>
                {t("privacy_policy.concluding_provisions.title")}
              </Text>
              <Text mt={4}>
              {t("privacy_policy.concluding_provisions.text_1")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.concluding_provisions.text_2")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.concluding_provisions.text_3")}
              {makeLink("neodigitalbazaar@gmail.com")}

            </Text>
            <Text mt={4}>
              {t("privacy_policy.concluding_provisions.text_4")}
            </Text>
            <Text mt={4}>
              {t("privacy_policy.concluding_provisions.text_5")}

              <ChakraLink as={ReactRouterLink} to='/'>
                https://neobazaar1-20185008ae61.herokuapp.com/.
              </ChakraLink>
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PrivacyPolice;
