import React from "react";
import { Container, Box, Center, Text, ListItem, List, Link as ChakraLink, } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';
import Header from "../components/Header";

const PrivacyPolice = () => {
  return (
    <>
      <Header />
      <Box as='section' p='50px' color='rgba(0, 90, 78, 1)'>
        <Container maxW='8xl' padding='0 30px'>
          <Center>
            <Text as='h2' margin='50px 0' textStyle='heading-small'>
              Privacy policy
            </Text>
          </Center>
          <Text textStyle='body-small'>
            <Text textStyle='body-h3' m="40px 0 20px">
              1. General provisions
            </Text>
            <Text>
              This privacy policy and personal data processing is compiled in
              accordance with the requirements of the Law of the Republic of
              Belarus dated 07/05/2021 No. 99-H "On Personal Data Protection"
              (further referred to as the Personal Data Law) and defines the
              procedure for processing personal data and measures to ensure the
              security of personal data taken by NeoBazaar (further referred to
              as the Operator).
            </Text>
            <Text mt={4}>
              1.1. The Operator sets as its most important goal and condition
              for the implementation of its activities the observance of human
              and civil rights and freedoms in the processing of his personal
              data, including the protection of the rights to privacy, personal
              and family secrets.
            </Text>
            <Text mt={4}>
              1.2. This Operator's policy regarding the processing of personal
              data (hereinafter referred to as the Policy) applies to all
              information that the Operator can receive about visitors to the
              website <ChakraLink as={ReactRouterLink} to="/"> http://www.neobazaar.com. </ChakraLink>
            </Text>
            <Text mt={4}>
              1.3. The User's use of the site means acceptance of this Privacy
              Policy and the terms of processing of the User's personal data.
            </Text>
            <Text mt={4}>
              1.4. In case of disagreement with the terms of the Privacy Policy,
              the User must stop using the Website.
            </Text>

            <Text textStyle='body-h3' m="40px 0 20px">
              2. Basic concepts used in Politics
            </Text>
            <Text mt={4}>
              2.1. Automated processing of personal data – processing of
              personal data using computer technology.
            </Text>
            <Text mt={4}>
              2.2. Blocking of personal data – temporary termination of the
              processing of personal data (except in cases where processing is
              necessary to clarify personal data).
            </Text>
            <Text mt={4}>
              2.3. Website, Website - a set of graphic and information
              materials, as well as computer programs and databases that ensure
              their availability on the Internet at a network address
              <ChakraLink as={ReactRouterLink} to="/"> http://www.neobazaar.com. </ChakraLink>
            </Text>
            <Text mt={4}>
              2.4. Personal data information system – a set of personal data
              contained in databases and information technologies and technical
              means that ensure their processing.
            </Text>
            <Text mt={4}>
              2.5. Depersonalization of personal data – actions as a result of
              which it is impossible to determine, without using additional
              information, the identity of personal data to a specific User or
              other personal data subject.
            </Text>
            <Text mt={4}>
              2.6. Processing of personal data – any action (operation) or a set
              of actions (operations) performed with or without the use of
              automation tools with personal data, including collection,
              recording, systematization, accumulation, storage, clarification
              (updating, modification), extraction, use, transfer (distribution,
              provision, access), depersonalization, blocking, deletion,
              destruction of personal data.
            </Text>
            <Text mt={4}>2.7. The operator is NeoBazaar.</Text>
            <Text mt={4}>
              2.8. Personal data – any information related directly or
              indirectly to a specific or identifiable User of the website
              <ChakraLink as={ReactRouterLink} to="/"> http://www.neobazaar.com. </ChakraLink>
            </Text>
            <Text mt={4}>
              2.9. Personal data authorized by the subject of personal data for
              dissemination – personal data to which an unlimited number of
              persons have access by the subject of personal data by giving
              consent to the processing of personal data authorized by the
              subject of personal data for distribution in accordance with the
              procedure provided for by the Law on Personal Data (hereinafter
              referred to as personal data authorized for distribution).
            </Text>
            <Text mt={4}>
              2.10. User – any visitor to the website <ChakraLink as={ReactRouterLink} to="/"> http://www.neobazaar.com
 </ChakraLink>            </Text>
            <Text mt={4}>
              2.11. Provision of personal data – actions aimed at disclosing
              personal data to a certain person or a certain circle of persons.
            </Text>
            <Text mt={4}>
              2.12. Dissemination of personal data – any actions aimed at
              disclosure of personal data to an indefinite circle of persons
              (transfer of personal data) or familiarization with personal data
              of an unlimited number of persons, including disclosure of
              personal data in the media, posting in information and
              telecommunications networks or providing access to personal data
              in any other way.
            </Text>
            <Text mt={4}>
            2.13. Cross–border transfer of personal data is the transfer of personal data to the territory of a foreign state to an authority of a foreign state, a foreign individual or a foreign legal entity.              </Text>
              <Text mt={4}>
              2.14. Destruction of personal data – any actions as a result of which personal data is permanently destroyed with the inability to further restore the content of personal data in the personal data information system and/or the material carriers of personal data are destroyed.              </Text>
              <Text mt={4}>
              2.15. "Cookies" is a small piece of data sent by a web server and stored on the user's computer, which the web client or web oTextwser sends to the web server in an HTTP request each time when trying to open a page of the corresponding site.              </Text>
              <Text mt={4}>
              2.16. "IP address" is a unique network address of a node in a computer network built using the IP protocol.              </Text>

              <Text textStyle='body-h3' m="40px 0 20px">
              3. Basic rights and obligations of the Operator
            </Text>
              <Text mt={4}>
              3.1. The Operator has the right to:</Text>
              <Text mt={4}>– receive reliable information and/or documents containing personal data from the subject of personal data; </Text>
              <Text mt={4}>– in case of withdrawal by the subject of personal data of consent to the processing of personal data, as well as sending a request to terminate the processing of personal data, the Operator has the right to continue processing personal data without the consent of the subject of personal data if there are grounds specified in the Law on Personal Data;</Text>
              <Text mt={4}>– independently determine the composition and list of measures necessary and sufficient to ensure the fulfillment of obligations provided for by the Law on Personal Data and regulatory legal acts adopted in accordance with it, unless otherwise provided by the Law on Personal Data or other laws.   </Text>    
              <Text mt={4}>
              3.2. The Operator is obliged to:</Text>
              <Text mt={4}>– to provide the subject of personal data, at his request, with information concerning the processing of his personal data;</Text>
              <Text mt={4}>– organize the processing of personal data in accordance with the procedure established by the current legislation of the Republic of Belarus;</Text>
              <Text mt={4}>– respond to requests and requests from personal data subjects and their legal representatives in accordance with the requirements of the Law on Personal Data;</Text>
              <Text mt={4}>– to inform the authorized body for the protection of the rights of personal data subjects at the request of this body of the necessary information within 10 days from the date of receipt of such a request;</Text>
              <Text mt={4}>– to publish or otherwise provide unrestricted access to this Policy regarding the processing of personal data;</Text>
              <Text mt={4}>– take legal, organizational and technical measures to protect personal data from unauthorized or accidental access to them, destruction, modification, blocking, copying, provision, dissemination of personal data, as well as from other illegal actions in relation to personal data;</Text>
              <Text mt={4}>– stop transferring (distributing, providing, accessing) personal data, stop processing and destroy personal data in the manner and in the cases provided for by the Law on Personal Data;</Text>
              <Text mt={4}>– perform other duties provided for by the Law on Personal Data.           </Text>
              <Text mt={4}>
              3.3. The Operator does not verify the accuracy of the personal data provided by the User of the site.               </Text>

              <Text textStyle='body-h3' m="40px 0 20px">
              4. Basic rights and obligations of personal data subjects
            </Text>              
              <Text mt={4}>
              4.1. Personal data subjects have the right to:</Text>
              <Text mt={4}>– receive information regarding the processing of his personal data, except in cases provided for by law. The information is provided to the personal data subject by the Operator in an accessible form, and it should not contain personal data related to other personal data subjects, except in cases where there are legitimate grounds for disclosure of such personal data. The list of information and the procedure for obtaining it is established by the Law on Personal Data;</Text>
              <Text mt={4}>– to require the operator to clarify his personal data, block or destroy them if the personal data is incomplete, outdated, inaccurate, illegally obtained or is not necessary for the stated purpose of processing, as well as to take measures provided for by law to protect their rights;</Text>
              <Text mt={4}>– to put forward a condition of prior consent when processing personal data in order to promote goods, works and services on the market;</Text>
              <Text mt={4}>– to revoke consent to the processing of personal data, as well as to send a request to terminate the processing of personal data;</Text>
              <Text mt={4}>– to appeal to the authorized body for the protection of the rights of personal data subjects or in court against illegal actions or inaction of the Operator during the processing of his personal data;</Text>
              <Text mt={4}>– to exercise other rights provided for by the legislation of the Republic of Belarus.            </Text>
              <Text mt={4}>
              4.2. The subjects of personal data are obliged to: </Text> 
              <Text mt={4}>– provide the Operator with reliable data about themselves;</Text> 
              <Text mt={4}>– inform the Operator about the clarification (updating, modification) of their personal data.   </Text>            
              <Text mt={4}>
              4.3. Persons who have provided the Operator with false information about themselves or information about another personal data subject without the latter's consent are liable in accordance with the legislation of the Republic of Belarus.              </Text>

              <Text textStyle='body-h3' m="40px 0 20px">
              5. The list of personal data for the processing of which the consent of the personal data subject is given            </Text>
              <Text mt={4}>
              5.1. This Privacy Policy establishes the obligations of the Operator to non-disclosure and ensure the protection of the confidentiality of personal data that the User provides at the request of the Operator.              </Text>
              <Text mt={4}>
              5.2. The personal data authorized for processing under this Privacy Policy is provided by the User by filling out registration forms on the Website <ChakraLink as={ReactRouterLink} to="/"> http://www.neobazaar.com. </ChakraLink>              </Text>
              <Text mt={4}>
              5.3. Registration data includes the following information: </Text> 
              <Text mt={4}>– User Name; </Text> 
              <Text mt={4}>– User e-mail address (e-mail).       </Text>         
              <Text mt={4}>
              5.4. The operator carries out the collection and processing of anonymous data that is automatically transferred to oTextwse the site, ad units and when visiting pages that have the statistical script of the system ("pixel"), including through the services of Internet statistics (Yandex Metric and Google Analytics):  </Text> 
              <Text mt={4}>– IP address; </Text> 
              <Text mt={4}>– information from cookies; </Text> 
              <Text mt={4}>– information about the oTextwser (or other program that provides access to the display of ads); </Text> 
              <Text mt={4}>– access time; </Text> 
              <Text mt={4}>– the address of the page where the ad block is located; </Text> 
              <Text mt={4}>– the address of the requested page; </Text> 
              <Text mt={4}>– referrer (address of the previous page).   </Text>             
              <Text mt={4}>
              5.5. Disabling cookies may result in the inability to access parts of the site that require authorization.              </Text>
              <Text mt={4}>
              5.6. Payment for the cost of the Operator's products online is carried out through the use of the Robokassa payment system. This payment system collects and stores financial information in accordance with its User Agreement and Privacy Policy.              </Text>
              <Text mt={4}>
              5.7. The Operator does not store the full details of the card and does not process payments, receiving only a notification from the payment system about the fact of successful payment.              </Text>

              <Text textStyle='body-h3' m="40px 0 20px">
              6. Principles of personal data processing
          </Text>
              <Text mt={4}>
              6.1. The processing of personal data is carried out on a lawful and fair basis.              </Text>
              <Text mt={4}>
              6.2. The processing of personal data is limited to achieving specific, predetermined and legitimate goals. Processing of personal data incompatible with the purposes of personal data collection is not allowed.              </Text>
              <Text mt={4}>
              6.3. It is not allowed to combine databases containing personal data, the processing of which is carried out for purposes incompatible with each other.              </Text>
              <Text mt={4}>
              6.4. Only personal data that meet the purposes of their processing are subject to processing.              </Text>
              <Text mt={4}>
              6.5. The content and volume of the processed personal data correspond to the stated purposes of processing. Redundancy of the processed personal data in relation to the stated purposes of their processing is not allowed.              </Text>
              <Text mt={4}>
              6.6. When processing personal data, the accuracy of personal data, their sufficiency, and, if necessary, relevance in relation to the purposes of personal data processing are ensured. The Operator takes the necessary measures and/or ensures that they are taken to delete or clarify incomplete or inaccurate data.              </Text>
              <Text mt={4}>
              6.7. Personal data is stored in a form that allows you to identify the subject of personal data, no longer than the purposes of personal data processing require, unless the period of personal data storage is established by law, an agreement to which the subject of personal data is a party, beneficiary or guarantor. The processed personal data is destroyed or depersonalized upon achievement of the processing goals or in case of loss of the need to achieve these goals, unless otherwise provided by law.              </Text>
             
             
              <Text textStyle='body-h3' m="40px 0 20px">
              7. Purposes of Processing Personal Data
          </Text>             
              <Text mt={4}>7.1. The Operator processes the User's personal data for the following purposes: </Text>
              <Text mt={4}>– communication with personal data subjects;</Text>
              <Text mt={4}>– providing personal data subjects with Website products;</Text>
              <Text mt={4}>– identification of the personal data subject;</Text>
              <Text mt={4}>– providing the subject of personal data with access to the Website;</Text>
              <Text mt={4}>– establishing feedback with the subject of personal data, including sending notifications, requests, processing requests and requests from the subject of personal data;</Text>
              <Text mt={4}>– providing the subject of personal data with effective customer and technical support in case of problems related to the use of the Website;</Text>
              <Text mt={4}>– providing the subject of personal data with news and (or) advertising newsletters, as well as other information by electronic communication E-mail and other means of communication;</Text>
              <Text mt={4}>– depersonalized User data collected using Internet statistics services are used to collect information about User actions on the Site, improve the quality of the Site and its content;</Text>
              <Text mt={4}>– create an account for making online payments;</Text>
              <Text mt={4}>– processing and receiving online payments;</Text>
              <Text mt={4}>– formation of statistical reports, conducting research;</Text>
              <Text mt={4}>– implementation of economic activities;</Text>
              <Text mt={4}>– exercise of other powers and duties assigned to the Operator by the legislation of the Republic of Belarus.
              </Text>

              <Text textStyle='body-h3' m="40px 0 20px">
              8. Terms of personal data processing
          </Text>  
              <Text mt={4}>
              8.1. The processing of personal data is carried out with the consent of the personal data subject to the processing of his personal data.              </Text>
              <Text mt={4}>
              8.2. The processing of personal data is necessary to achieve the goals provided for by law, to carry out the functions, powers and duties assigned to the operator by the legislation of the Republic of Belarus.              </Text>
              <Text mt={4}>
              8.3. The processing of personal data is necessary for the administration of justice, the execution of a judicial act, an act of another body or official to be executed in accordance with the legislation of the Republic of Belarus on enforcement proceedings.              </Text>
              <Text mt={4}>
              8.4. The processing of personal data is necessary for the performance of an agreement to which the personal data subject is a party or beneficiary or guarantor, as well as for the conclusion of an agreement on the initiative of the personal data subject or an agreement under which the personal data subject will be the beneficiary or guarantor.              </Text>
              <Text mt={4}>
              8.5. The processing of personal data is necessary to exercise the rights and legitimate interests of the operator or third parties or to achieve socially significant goals, provided that the rights and freedoms of the personal data subject are not violated.              </Text>
              <Text mt={4}>
              8.6. Personal data is processed, access to which is provided to an unlimited number of persons by the subject of personal data or at his request (hereinafter referred to as publicly available personal data).              </Text>
              <Text mt={4}>
              8.7. Personal data subject to publication or mandatory disclosure in accordance with the law is processed.              </Text>
              
              
              <Text textStyle='body-h3' m="40px 0 20px">
              9. The procedure for the collection, storage, transfer and other types of personal data processing          </Text>  
              <Text mt={4}>
              9.1. The security of personal data processed by the Operator is ensured through the implementation of legal, organizational and technical measures necessary to fully comply with the requirements of current legislation in the field of personal data protection.              </Text>
              <Text mt={4}>
              9.2. The Operator ensures the safety of personal data and takes all possible measures to exclude access to personal data of unauthorized persons.              </Text>
              <Text mt={4}>
              9.3. The User's personal data will never, under any circumstances, be transferred to third parties, except in cases related to the implementation of current legislation or if the subject of personal data has given consent to the Operator to transfer data to a third party to fulfill obligations under a civil contract.              </Text>
              <Text mt={4}>
              9.4. The period of processing of personal data is determined by the achievement of the purposes for which personal data was collected, unless another period is provided for by the contract or current legislation.              </Text>
              <Text mt={4}>
              9.5 The User may revoke his consent to the processing of personal data at any time by sending a notification to the Operator by e-mail to the Operator's e-mail address neodigitalbazaar@gmail.com marked "Withdrawal of consent to the processing of personal data".              </Text>
              <Text mt={4}>
              9.6. All information collected by third-party services, including payment systems, means of communication and other service providers, is stored and processed by these persons (Operators) in accordance with their User Agreement and Privacy Policy. The subject of personal data and/or with the specified documents. The Operator is not responsible for the actions of third parties, including the service providers specified in this paragraph.              </Text>
              <Text mt={4}>
              9.7. The prohibitions established by the subject of personal data on the transfer (except for granting access), as well as on the processing or conditions of processing (except for obtaining access) of personal data allowed for distribution, do not apply in cases of processing personal data in the state, public and other public interests defined by the legislation of the Republic of Belarus.              </Text>
              <Text mt={4}>
              9.8. The Operator ensures the confidentiality of personal data when processing personal data.              </Text>
              <Text mt={4}>
              9.9. The Operator stores personal data in a form that allows determining the subject of personal data for no longer than the purposes of personal data processing require, unless the period of personal data storage is established by law, an agreement to which the subject of personal data is a party, beneficiary or guarantor.              </Text>
              <Text mt={4}>
              9.10. The condition for the termination of personal data processing may be the achievement of the purposes of personal data processing, the expiration of the consent of the personal data subject, the withdrawal of consent by the personal data subject or the requirement to terminate the processing of personal data, as well as the identification of unlawful processing of personal data.              </Text>
            
              <Text textStyle='body-h3' m="40px 0 20px">
              10. List of actions performed by the Operator with the received personal data                 </Text>  
              <Text mt={4}>
              10.1. The Operator collects, records, systematizes, accumulates, stores, clarifies (updates, changes), extracts, uses, transfers (distributes, provides, accesses), depersonalizes, blocks, deletes and destroys personal data.              </Text>
              <Text mt={4}>
              10.2. The Operator performs automated processing of personal data with or without receiving and/or transmitting the received information by information and telecommunication networks.              </Text>
              
              
              <Text textStyle='body-h3' m="40px 0 20px">
              11. Cross-border transfer of personal data
                   </Text>  
              <Text mt={4}>
              11.1. Prior to the start of cross-border transfer of personal data, the Operator is obliged to notify the authorized body for the protection of the rights of personal data subjects of its intention to carry out cross-border transfer of personal data (such notification is sent separately from the notification of the intention to process personal data).              </Text>
              <Text mt={4}>
              11.2. Before submitting the above notification, the Operator is obliged to receive relevant information from the authorities of a foreign state, foreign individuals, and foreign legal entities to whom the cross-border transfer of personal data is planned.              </Text>
              
              
              <Text textStyle='body-h3' m="40px 0 20px">
              12. Confidentiality of personal data
                   </Text> 
              <Text mt={4}>
              12.1. The operator and other persons who have gained access to personal data are obliged not to disclose or distribute personal data to third parties without the consent of the personal data subject, unless otherwise provided for by the legislation of the Republic of Belarus.              </Text>
              <Text mt={4}>

              <Text textStyle='body-h3' m="40px 0 20px">
              13. Final provisions
                   </Text> 
                   13.1. Issues related to the processing of personal data that are not fixed in this Policy are regulated by the legislation of the Republic of Belarus.              </Text>
              <Text mt={4}>
              13.2. If any provision of the Policy is found to be contrary to the law, the remaining provisions that comply with the law remain in force and are valid, and any invalid provision will be considered deleted/amended to the extent necessary to ensure its compliance with the law.              </Text>
              <Text mt={4}>
              13.3. The User can receive any clarifications on issues of interest related to the processing of his personal data by contacting the Operator by e-mail neodigitalbazaar@gmail.com.              </Text>
              <Text mt={4}>
              13.4. This document will reflect any changes to the Operator's personal data processing policy. The policy is valid indefinitely until it is replaced by a new version.               </Text>
              <Text mt={4}>
              13.5. The current version of the Policy is available on the website <ChakraLink as={ReactRouterLink} to="/"> http://www.neobazaar.com. </ChakraLink>
              </Text>
</Text>
          
        </Container>
      </Box>
    </>
  );
};

export default PrivacyPolice;
