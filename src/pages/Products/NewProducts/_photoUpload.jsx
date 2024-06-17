import React, { useState, useRef, useEffect } from "react";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { FaLink } from "react-icons/fa6";

import {
  Box,
  Text,
  Button,
  Grid,
  Image,
  ModalBody,
  Input,
} from "@chakra-ui/react";

const PhotoUpload = ({ photos, setPhotos }) => {
  const fileInputRef = useRef(null); 
  const numberOfPhotosUploaded = photos.length;
  


  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    const validFormats = files.filter((file) =>
      ["image/jpeg", "image/png", "image/gif"].includes(file.type),
    );

    if (
      !validFormats.every((file) =>
        ["image/jpeg", "image/png", "image/gif"].includes(file.type),
      )
    ) {
      alert("Unsupported format. Please upload JPEG, PNG, or GIF images.");
      return; 
    }

    const totalSize = validFormats.reduce(
      (total, file) => total + file.size,
      0,
    );

    if (totalSize > 10000000) {
      alert("Total photo size exceeds 10 MB");
      return; 
    }

    if (photos.length + validFormats.length > 3) {
      alert("Maximum of 3 photos allowed");
      return; 
    }

    
    setPhotos([...photos, ...validFormats]);
    fileInputRef.current.value = ""; 

    
  };

  const handleRemove = (index) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  return (
    <Box
      className='cover'
      border='1px dotted #7E88A4'
      borderRadius='8px'
      bg='white'
      minH='180px'
      p='15px'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'>
      <Box display='flex' justifyContent='space-between' width='100%'>
      <Text  textStyle='Ui/Body-medium' color='#7E88A4'>
        Cover
      </Text>
      <Text  textStyle='Ui/Body-medium' color='#7E88A4'>
      Loaded {numberOfPhotosUploaded} of 3
      </Text>
      </Box>
      <Grid
        templateColumns='repeat(3, 1fr)'
        gap={6}
        mt={4}
        justifyItems='center'
        w='100%'>
        {photos.map((photo, index) => (
          <Box key={index} style={{ position: "relative" }}>
            <Image
              src={URL.createObjectURL(photo)}
              alt={`Selected ${index}`}
              boxSize='200px'
              objectFit='cover'
              margin='20px 0'
            />
            <ImCross
              onClick={() => handleRemove(index)}
              style={{
                position: "absolute",
                top: 30,
                right: 10,
                color: "#000",
                cursor: "pointer",
                zIndex: 2,
              }}
            />
          </Box>
        ))}
      </Grid>

          <Input
            type='file'
            accept='image/*'
            ref={fileInputRef} 
            onChange={handleFileChange}
            multiple
            style={{ display: "none" }} 
          />
          <Button
            leftIcon={<BsFileEarmarkArrowUp fontSize='24px' />}
            color='white'
            bg='black'
            borderRadius='10px'
            p='28px'
            fontFamily='Arial'
            fontSize='20px'
            fontWeight='400'
            lineHeight='23px'
            onClick={handleClick}
            mb='20px'>
            Upload a cover photo
          </Button>

      <Text textStyle='Ui/Body-medium' color='#7E88A4' textAlign='center'>
        Supports file formats: JPEG, PNG, GIF. The image size is at least
        600x600px. Photo size no more than 10 MB. The maximum number of photos
        is 3 pieces.
      </Text>
    </Box>
  );
};

export default PhotoUpload;
