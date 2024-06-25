import React, { useState } from "react";
import UserMenu from "../../../components/userMenu";
import axios from 'axios';
import {
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";
import HeaderFormProducts from "./_headerFormProducts";
import GeneralInfo from "./_generalInfo";
import ContentDescription from "./_contentDescription";
import CategorySelection from "./_categorySelection";
import MediaUpload from "./_mediaUpload";
import Pricing from "./_pricing";
import LimitProducts from "./_limitProducts";
import TimeSelection from "./_timeSelection";
import PhotoUpload from "./_photoUpload";

const NewProducts = () => {
  const [status, setStatus] = useState("draft");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("1"); //для установки первичного состояния запрос на сервер нужен будет и значение +1
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [category, setCategory] = useState("");
  const [isCheckedSettings, setIsCheckedSettings] = useState(false);
  const [isCheckedPracing, setIsCheckedPracing] = useState(false);
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [time, setTime] = useState("");
  const [photos, setPhotos] = useState([]);
  const [limit, setLimit] = useState("")
  const [file, setFile] = useState(null);


  const [nameError, setNameError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [descriptionError,setDescriptionError] = useState(false);
  const [priciError, setPriciError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      !name.trim() ||
      !content.trim() ||
      !description.trim() ||
      !price.trim() ||
      !time.trim() ||
      !category.trim()
    ) {
      setNameError(true);
      setContentError(true);
      setDescriptionError(true);
      setPriciError(true);
      setTimeError(true);
      setCategoryError(true);
      return;
    }
  
    const formData = {
      id,
      status,
      name,
      content,
      description,
      category,
      isCheckedSettings,
      isCheckedPracing,
      price,
      currency,
      time,
      date,
      photos,
      limit,
      file,
    };
  
    try {
      const response = await axios.post('https://neobazaar-ee1c625c2e80.herokuapp.com/products', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Response:', response.data);
  
      setName("");
      setContent("");
      setDescription("");
      setId("1");
      setDate(new Date().toLocaleDateString());
      setCategory("");
      setIsCheckedSettings(false);
      setIsCheckedPracing(false);
      setPrice("");
      setCurrency("USD");
      setTime("");
      setPhotos([]);
      setLimit("");
      setFile(null);
  
      setNameError(false);
      setContentError(false);
      descriptionError(false);
      setPriciError(false);
      setTimeError(false);
      setCategoryError(false);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };
  

  return (
    <>
      <UserMenu />
      <Box as='section' className='product-save' bg='rgba(35, 160, 148, 1)'>
        <Container maxW='8xl' ml='330px' w='auto' padding='0 30px'>
          <HeaderFormProducts onSaveClick={handleSubmit} />
        </Container>
      </Box>
      <Box bg='rgba(249, 246, 244, 1)' minH='100vh' className='products-form'>
        <Container maxW='8xl' ml='330px' w='auto'>
          <Box padding='70px 30px 70px 80px'>
            <GeneralInfo
              status={status}
              setStatus={setStatus}
              id={id}
              setId={setId}
              setDate={setDate}
            />
            <Flex flexDirection='column' gap='50px'>
              <ContentDescription
                contentError={contentError} 
                descriptionError={descriptionError}
                nameError={nameError}
                name={name}
                setName={setName}
                content={content}
                setContent={setContent}
                description={description}
                setDescription={setDescription}
              />
              <CategorySelection
                categoryError={categoryError}
                category={category}
                setCategory={setCategory}
              />
              <PhotoUpload setPhotos={setPhotos} photos={photos}/>

              <MediaUpload file={file} setFile={setFile}/>


              <Pricing
                priciError={priciError}
                setPriciError={setPriciError}
                price={price}
                setPrice={setPrice}
                currency={currency}
                setCurrency={setCurrency}
                isCheckedPracing={isCheckedPracing}
                setIsCheckedPracing={setIsCheckedPracing}
              />
              <LimitProducts
              limit={limit}
              setLimit={setLimit}
                isCheckedSettings={isCheckedSettings}
                setIsCheckedSettings={setIsCheckedSettings}
              />
            </Flex>
            <TimeSelection
              time={time}
              setTime={setTime}
              timeError={timeError}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NewProducts;
