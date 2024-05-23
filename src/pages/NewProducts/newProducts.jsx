import React, { useState } from "react";
import UserMenu from "../../components/userMenu";
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
  const [describeProduct, setDescribeProduct] = useState("");
  const [id, setId] = useState("1"); //для установки первичного состояния запрос на сервер нужен будет и значение +1
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [category, setCategory] = useState("");
  const [isCheckedSettings, setIsCheckedSettings] = useState(false);
  const [isCheckedPracing, setIsCheckedPracing] = useState(false);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [time, setTime] = useState("");
  const [photos, setPhotos] = useState([]);


  const [nameError, setNameError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [describeProductError, setDescribeProductError] = useState(false);
  const [priciError, setPriciError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(true);
    setContentError(true);
    setDescribeProductError(true);
    setPriciError(true);
    setTimeError(true);
    setCategoryError(true);
    if (
      !name.trim() ||
      !content.trim() ||
      !describeProduct.trim() ||
      !amount.trim() ||
      !time.trim() ||
      !category.trim()
    ) {
      return;
    }


    const formData = {
      id,
      status,
      name,
      content,
      describeProduct,
      category,
      isCheckedSettings,
      isCheckedPracing,
      amount,
      currency,
      time,
      date,
      photos,
    };

    console.log(formData);

    setName(""); 
    setContent(""); 
    setDescribeProduct(""); 
    setId("1"); 
    setDate(new Date().toLocaleDateString()); 
    setCategory(""); 
    setIsCheckedSettings(false); 
    setIsCheckedPracing(false); 
    setAmount(""); 
    setCurrency("USD"); 
    setTime(""); 
    setPhotos([]); 
  
    setNameError(false);
    setContentError(false);
    setDescribeProductError(false);
    setPriciError(false);
    setTimeError(false);
    setCategoryError(false);
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
                describeProductError={describeProductError}
                nameError={nameError}
                name={name}
                setName={setName}
                content={content}
                setContent={setContent}
                describeProduct={describeProduct}
                setDescribeProduct={setDescribeProduct}
              />
              <CategorySelection
                categoryError={categoryError}
                category={category}
                setCategory={setCategory}
              />
              <PhotoUpload setPhotos={setPhotos} photos={photos}/>

              <MediaUpload />


              <Pricing
                priciError={priciError}
                setPriciError={setPriciError}
                amount={amount}
                setAmount={setAmount}
                currency={currency}
                setCurrency={setCurrency}
                isCheckedPracing={isCheckedPracing}
                setIsCheckedPracing={setIsCheckedPracing}
              />
              <LimitProducts
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
