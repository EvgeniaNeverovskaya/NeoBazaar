import React, { useContext } from "react";
import {
  Link as ChakraLink,
  Flex,
  Container,
  Box,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../components/authContext";

const Header = () => {
  const { isLoggedIn, user, handleLogout } = useContext(AuthContext);

  return (
    <Box
      as="header"
      padding="8px"
      position="fixed"
      top={0}
      w="100%"
      zIndex="10"
      bg="white"
    >
      <Container maxW="8xl" textTransform="uppercase" padding="0 30px">
        <Flex justifyContent="space-between" alignItems="center">
          <ChakraLink
            as={ReactRouterLink}
            to="/"
            style={{ textDecoration: "none" }}
            fontWeight="500"
            fontSize="30px"
            lineHeight="35.8px"
          >
            NEOBAZAAR
          </ChakraLink>
          <List textStyle="button-small">
            <Flex direction="row" gap="40px">
              <ListItem>
                <ChakraLink>about us</ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink>Features</ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink>pricing</ChakraLink>
              </ListItem>
            </Flex>
          </List>

          {isLoggedIn ? (
            <Flex alignItems="center">
              <ChakraLink
                as={ReactRouterLink}
                to="/products"
                title={user ? user.username : ""}
                _hover={{ textDecoration: "underline" }}
              >
                <Icon as={FaUser} boxSize={6} />
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/cart"
                marginLeft="20px"
                _hover={{ textDecoration: "underline" }}
              >
                <Icon as={FaShoppingCart} boxSize={6} />
              </ChakraLink>
              <ChakraLink
                onClick={handleLogout}
                textStyle="button-medium"
                marginLeft="20px"
                cursor="pointer"
              >
                Logout
              </ChakraLink>
            </Flex>
          ) : (
            <ChakraLink
              textStyle="button-medium"
              as={ReactRouterLink}
              to="/log-in"
            >
              Log in
            </ChakraLink>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
