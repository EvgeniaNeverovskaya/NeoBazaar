import React from "react";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { Box, Text, Button } from "@chakra-ui/react";

const MediaUpload = () => {
  return (
      <Box
        className='thumbnail'
        border='1px dotted #7E88A4'
        borderRadius='8px'
        bg='white'
        minH='180px'
        p='15px'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='space-between'>
        <Text alignSelf='flex-start' textStyle='Ui/Body-medium' color='#7E88A4'>
          Thumbnail
        </Text>
        <Button
          leftIcon={
            <Box mr='15px'>
              <BsFileEarmarkArrowUp fontSize='24px' />
            </Box>
          }
          color='white'
          bg='black'
          borderRadius='10px'
          w='189px'
          p='28px'
          fontFamily='Arial'
          fontSize='20px'
          fontWeight='400'
          lineHeight='23px'>
          Upload files
        </Button>
        <Text textStyle='Ui/Body-medium' color='#7E88A4' textAlign='center'>
          This image appears in the Neobazaar Library, Discover and Profile
          pages. Your image should be square, at least 600x600px, and JPG, PNG
          or GIF format.
        </Text>
      </Box>
  );
};

export default MediaUpload;
