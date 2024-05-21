import React from "react";
import { Flex, FormControl, Input, Textarea } from "@chakra-ui/react";

const ProductsDescription = () => {
  return (
    <Flex flexDirection='column' gap='50px'>
      <FormControl id='name'>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          maxLength='50'
          bg='#fff'
          required
        />
      </FormControl>
      <FormControl id='content'>
        <Textarea
          type='text'
          name='content'
          placeholder='Provide important information about the product (file format, size, number of pages, release date, number of license users, etc.).'
          maxLength='100'
          minH='133px'
          bg='#fff'
          required
        />
      </FormControl>
      <FormControl id='describe-product'>
        <Textarea
          type='text'
          name='describe-product'
          placeholder='Describe Your Product'
          maxLength='300'
          minH='147px'
          bg='#fff'
          required
        />
      </FormControl>
    </Flex>
  );
};

export default ProductsDescription;
