import React, { useState, useEffect } from "react";
import {
  Flex,
  FormControl,
  Input,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";

const ContentDescription = ({
  name,
  setName,
  content,
  setContent,
  describeProduct,
  setDescribeProduct,
  nameError,
  contentError,
  describeProductError,
}) => {
  const isErrorName = nameError && name === "";
  const isErrorContent = contentError && content === "";
  const isErrorDescribe = describeProductError && describeProduct === "";

  return (
    <Flex flexDirection='column' gap='50px'>
      <FormControl id='name' isInvalid={isErrorName}>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          maxLength='50'
          bg='#fff'
          required
          onChange={(e) => setName(e.target.value)}
        />
        {isErrorName && <FormErrorMessage>Name is required.</FormErrorMessage>}
      </FormControl>
      <FormControl id='content' isInvalid={isErrorContent}>
        <Textarea
          type='text'
          name='content'
          placeholder='Provide important information about the product (file format, size, number of pages, release date, number of license users, etc.).'
          maxLength='100'
          minH='133px'
          bg='#fff'
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {isErrorContent && (
          <FormErrorMessage>Content is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl id='describe-product' isInvalid={isErrorDescribe}>
        <Textarea
          type='text'
          name='describe-product'
          placeholder='Describe Your Product'
          maxLength='300'
          minH='147px'
          bg='#fff'
          required
          value={describeProduct}
          onChange={(e) => setDescribeProduct(e.target.value)}
        />
        {isErrorDescribe && (
          <FormErrorMessage>Describe Product is required.</FormErrorMessage>
        )}
      </FormControl>
    </Flex>
  );
};

export default ContentDescription;
