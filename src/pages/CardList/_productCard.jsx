import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { BsBasket3 } from "react-icons/bs";


const categoryBackgroundsCard = {
  '3D': '#FFD3F6',
  Education: '#A7D9D4',
  Audio: '#FFE999',
  Design: '#FFC9F4',
  'Drawing-&-Painting': '#D37374',
  Photography: '#FEFFA4',
  Gaming: '#FFB3A2',
  'Fitness-&-Health': '#B0C1F3',
  'Software-&-Development': '#D7D0CE',
  
};

const ProductCard = ({ product }) => {
  const { category, name, userName, price, photo } = product;


  const bgColor = categoryBackgroundsCard[category] || 'white';
  return (
    <Box
      className='product-card'
      width='298px'
      height='451px'
      bg={bgColor} 
      borderRadius='14px'
      p='30px'      
      margin='20px 0'
      color='#000'>
      <Image
        src={photo}
        alt={name}
        width='100%'
        height='200px'
        objectFit='cover'
        style={{
          borderRadius: "14px",
          width: "100%",
          height: "274px",
          objectFit: "cover",
          marginBottom: "15px",
        }}
      />
      <Box display='flex' flexDirection='column' gap='15px'>
        <Text fontSize='18px' fontWeight='500' lineHeight='21.5px'>
          {name}
        </Text>
        <Text>{userName}</Text>
        <Box display='flex' justifyContent='space-between'>
          <Text
            className='price'
            fontSize='18px'
            fontWeight='700'
            lineHeight='21.5px'>
            $ {price}.00
          </Text>
          <BsBasket3 fontSize='24px' cursor='pointer'/>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
