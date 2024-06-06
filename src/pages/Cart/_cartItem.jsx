// CartItem.js
import React from "react";
import { Box, Text, Image, Flex, Button, Checkbox } from "@chakra-ui/react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import ModalDialog from "../../components/modalDialog";

const CartItem = ({ product, onSelect, isSelected }) => {
  const { id, name, userName, price, photo, email, currency } = product;

  const handleSelectChange = () => {
    onSelect(id, !isSelected);
  };

  return (
    <>
      <Box
        className='cart-item'
        bg='white'
        height='150px'
        color='#222222'
        fontWeight='500'
        fontSize='16px'
        lineHeight='19px'
        borderRadius='10px'
        p='20px 30px'
        display='flex'
        m='20px 20px 20px 65px'
        position='relative'>
        <Box
          position='absolute'
          left='-40px'
          top='50%'
          transform='translateY(-50%)'>
          <Checkbox
            isChecked={isSelected}
            onChange={handleSelectChange}
            sx={{
              ".chakra-checkbox__control": {
                backgroundColor: "transparent",
                borderColor: "black",
                textStyle: "body-small",
                _checked: {
                  backgroundColor: "transparent",
                  borderColor: "black",
                  color: "black",
                },
                _hover: {
                  backgroundColor: "transparent",
                },
              },
            }}
          />
        </Box>
        <Image
          src={photo}
          alt={name}
          width='96px'
          height='110px'
          objectFit='cover'
          borderRadius='5px'
        />
        <Flex
          direction='column'
          justify='space-between'
          padding='0 20px'
          overflow='clip'
          maxW='550px'>
          <Text>{name}</Text>
          <Text>{userName}</Text>
        </Flex>
        <Flex
          direction='column'
          justify='space-between'
          align='flex-end'
          grow='1'>
          <ModalDialog
            openButton={
              <Button
                rightIcon={<BsTrash fontSize='20px' />}
                color='#000'
                padding='0'
                bg='transparent'
                h='max-content'
                _hover={{ bg: "transparent", color: "#53596a" }}
                _active={{ bg: "transparent", color: "grey" }}
                _focus={{ outline: "none" }}></Button>
            }>
            <Box p='20px'>
              <Text
                fontSize='24px'
                fontWeight='400'
                mb='30px'
                textAlign='center'>
                {" "}
                Do you really want to delete the product from the shopping cart?
              </Text>
              <Flex align='center' justify='center' gap={10}>
                <Button
                  bg='#2F2F2F'
                  color='#fff'
                  padding='30px 118px'
                  fontSize='20px'
                  fontWeight='400'>
                  Yes
                </Button>
                <Button
                  bg='#2F2F2F'
                  color='#fff'
                  padding='30px 118px'
                  fontSize='20px'
                  fontWeight='400'
                  onClick={(e) =>
                    e.target
                      .closest("[role='dialog']")
                      .querySelector("[aria-label='Close']")
                      .click()
                  } 
                >
                  No
                </Button>
              </Flex>
            </Box>
          </ModalDialog>

          <ModalDialog
            openButton={
              <Button
                rightIcon={<AiOutlineMessage fontSize='22px' />}
                color='#000'
                padding='0'
                bg='transparent'
                h='max-content'
                _hover={{ bg: "transparent", color: "#53596a" }}
                _active={{ bg: "transparent", color: "grey" }}
                _focus={{ outline: "none" }}></Button>
            }>
            <Box p='20px'>
              <Text fontSize='24px' fontWeight='400' textAlign='center'>
              Please contact the seller to purchase via email - {email}
              </Text>
            </Box>
          </ModalDialog>
          <Text>
            {currency} {price}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default CartItem;
