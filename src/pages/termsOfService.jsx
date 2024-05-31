import React from "react";
import {
  Center,
  Text,
  Box,
  Container,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';
import Header from "../components/Header";

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


const TermsOfService = () => {
  return (
    <>
      <Header />
      <Box as="section" p="50px" color="rgba(0, 90, 78, 1)">
        <Container maxW="8xl">
          <Center>
            <Text as="h2" margin="50px 0" textStyle="heading-small">
              Terms of use
            </Text>
          </Center>
          <Box className="main-container" textStyle="body-small" padding="0 30px">
            <Text className="website">
              These Terms of Use (further referred to as the "Agreement") are
              accepted by NeoBazaar (further referred to as the "Company") and
              apply to website
              <ChakraLink as={ReactRouterLink} to="/"> https://neobazaar1-20185008ae61.herokuapp.com/ </ChakraLink>, branded pages on other
              platforms, mobile and other applications used to work with such
              websites and other platforms (further referred to as the
              "Platform"), which are operated directly by the Company or on her
              behalf. By continuing to register or using the Platform, you
              automatically accept this Agreement. In case of any problems and
              complaints, you agree and undertake to try to resolve them first
              in a pre-trial manner by contacting
              {makeLink("neodigitalbazaar@gmail.com")}
              email address.
            </Text>
            <Text textStyle="body-h3" margin="40px 0 15px">
              Content
            </Text>
            <Text>
              You are responsible for your own "Content" that you create,
              including any information, materials or any other content that you
              post on the Platform. Your Content must comply with this
              Agreement, ethical standards and laws. As responsible for Your
              Content, you agree, among other things, that:
              <br />- You have all the necessary permissions, rights and
              licenses necessary to work with these Content, post them on the
              Platform or transfer them to the Company;
              <br />- Your Content does not include personal, private or
              confidential information belonging to others;
              <br />- Your Content does not violate the rights of any individual
              or legal entity;
              <br />- It is forbidden to create Content on the Platform in order
              to gain access to the personal data of visitors to the Platform,
              aimed at offering civil law contracts with users of the Platform,
              as well as involving interaction with users of the Platform, the
              final purpose of which is to attract users of the Platform as
              employees and/or contractors to any organization, the conclusion
              of an employment or a civil contract with the users of the
              Platform.
              <br />
              We do not require the transfer of ownership of your Content to us.
              However, in order to ensure the functioning of the Platform, its
              improvements, promotion, advertising, as well as to protect the
              Company and the Platform, you grant the Company a non-exclusive,
              worldwide, perpetual, irrevocable, free, sublicensable,
              transferable right and license (including the waiver of any moral
              rights) to use, post, store, reproduce, modify, publish, public
              demonstration, distribution and creation of derivative Content, as
              well as the use (including commercial) of copyrights, trademarks,
              advertising rights and databases, which you have in relation to
              your Content. This license will allow your Content to remain on
              the Platform even after you cease to be a member of the Company or
              the Platform.
              <br />
              We are not responsible for the Content posted by users of the
              Platform. We do not pre-moderate all the Content. If you find
              Content that violates this Agreement, please let us know at
              {makeLink("neodigitalbazaar@gmail.com")}
            </Text>
            <Text
              className="changes-to-terms"
              textStyle="body-h3"
              margin="40px 0 15px"
            >
              Personal data
            </Text>
            <Text>
              The Company collects registration and other information about you
              collected through the Platform. Please read the following
              documents in order to learn more about what data we collect and
              why: Privacy Policy. By continuing to register or use the
              Platform, you agree to all of the above rules. Please note that
              these rules and documents do not cover the use of information by
              users of the Platform.
            </Text>
            <Text
              className="changes-to-terms"
              textStyle="body-h3"
              margin="40px 0 15px"
            >
              Using the Platform
            </Text>
            <Text>
              You agree that you will not, directly or indirectly, extract data
              from the Platform for commercial purposes without the permission
              of this Agreement by automatic methods, either with the help of
              third parties, or by other methods; (b) perform any actions that
              harm, damage or overload the Platform with data or requests.
              <br />
              You agree to use, store and process personal data collected
              through the Platform in accordance with the law, ethical and moral
              principles. You undertake to inform the users of the Platform
              whose data you process or own about your actions with this data
              and undertake to process requests from these users related to
              their data. You also undertake to securely store and protect data
              from unauthorized access, processing, and delete them as soon as
              the need for which this data was collected disappears, or at the
              request of representatives of the Platform.
              <br />
              Using the Platform involves interacting with real people and
              performing real actions in the real world, which can lead to
              unforeseen situations. We cannot control what happens outside the
              Platform and we are not responsible for it. You should use common
              sense when interacting with other users of the Platform. Also, the
              Platform does not control user behavior, so the Platform is not
              responsible for their actions. If you find behavior that violates
              this Agreement, ethical standards or the law, please contact us by
              email
              {makeLink("neodigitalbazaar@gmail.com")}
            </Text>
            <Text
              className="changes-to-terms"
              textStyle="body-h3"
              margin="40px 0 15px"
            >
              Dispute resolution
            </Text>
            <Text>
              Before submitting a claim, you and the Company agree to try to
              resolve any disputes through dialogue. We use the term "claim" in
              this paragraph to refer to any disputes, claims or disagreements
              arising from or related to your use of our Platform or this
              Agreement. You or the Company can initiate this process by sending
              a written notification describing the problem and the proposed
              solution. The main contact for these purposes on the Company's
              side is the email address
              {makeLink("neodigitalbazaar@gmail.com")}. If we are unable to
              resolve the problem within 30 business days after receiving the
              message and confirmation of its receipt, you or the Company can go
              to court.
            </Text>
            <Text
              className="changes-to-terms"
              textStyle="body-h3"
              margin="40px 0 15px"
            >
              Intellectual property
            </Text>
            <Text>
              The Company's trademarks, logos, registered names and titles are
              the intellectual property of the Company. Our Platform, including
              the materials on the Platform, are also our intellectual property
              or the property of our licensors. You agree not to use our
              intellectual property without our written permission.
              <br />
              The company respects the intellectual property of others and we
              expect the same behavior from our users. Under certain
              circumstances and at our discretion, we may remove or restrict
              access to materials that, in our opinion, may infringe or infringe
              on the intellectual property of others. We can also remove or
              restrict access to the Platform to those who repeat these
              violations.
              <br />
              If you believe that your intellectual property rights have been
              violated, please contact us by email
              {makeLink("neodigitalbazaar@gmail.com")}
            </Text>
            <Text
              className="changes-to-terms"
              textStyle="body-h3"
              margin="40px 0 15px"
            >
              Changes to the Terms of Use and the Platform
            </Text>
            <Text>
              We can change the text of this Agreement. When we do this, we will
              post a new version on this page and send notifications to your
              email. By continuing to use the Platform after any changes to the
              Agreement, you agree to the changes in the Agreement. If you do
              not want to accept the changes in the Agreement, you can delete
              your account.
              <br />
              We are constantly improving the Platform. This means that we can
              add new or disable old Platform functionality at our sole
              discretion and without notifying users. By using the Platform, you
              accept it.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TermsOfService;
