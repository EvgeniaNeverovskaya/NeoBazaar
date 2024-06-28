import React, { useState, useRef } from "react";
import { Box, Button, FormControl, Link, Text } from "@chakra-ui/react";
import { BsFileEarmarkArrowUp, BsTrashFill } from "react-icons/bs"; // Import the trash icon
import { useTranslation } from "react-i18next";

const MediaUpload = ({ file, setFile }) => {
  const {t} = useTranslation();

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setFile(null);
      return;
    }
    setFile(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDeleteFile = () => {
    setFile(null);
  };

  return (
    <>
      <Box
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
          {t("products.form.thumbnail")}
        </Text>
        {file && (
          <Box display='flex' alignItems='center'>
            <Link
              href={URL.createObjectURL(file)}
              isExternal
              target='_blank'
              color='#7E88A4'
              fontSize='20px'
              fontFamily='Arial'>
          {t("products.form.preview")}
          </Link>
            <Button
              leftIcon={<BsTrashFill fontSize='24px' />}
              color='#7E88A4'
              bg='transparent'
              _hover={{ bg: "transparent", color: "#53596a" }}
              _active={{ bg: "transparent" }}
              _focus={{ outline: "none" }}
              onClick={handleDeleteFile}></Button>
          </Box>
        )}

        <input
          type='file'
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept='.jpg,.jpeg,.png,.pdf,.mp3,.mp4,.wav,.avi'
          ref={fileInputRef}
        />
        <Button
          leftIcon={<BsFileEarmarkArrowUp fontSize='24px' />}
          color='white'
          bg='black'
          borderRadius='10px'
          p='28px'
          m='20px'
          fontFamily='Arial'
          fontSize='20px'
          fontWeight='400'
          lineHeight='23px'
          onClick={handleButtonClick}>
          {t("products.form.upload_files")}
          </Button>
        <Text textStyle='Ui/Body-medium' color='#7E88A4' textAlign='center'>
        {t("products.form.upload_files_description")}
        </Text>
      </Box>
    </>
  );
};

export default MediaUpload;
