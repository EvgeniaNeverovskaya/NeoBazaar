import React, { useState, useEffect } from "react";
import {
  Flex,
  FormControl,
  Input,
  Textarea,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";


const ContentDescription = ({
  name,
  setName,
  content,
  setContent,
  description,
  setDescription,
  nameError,
  contentError,
  descriptionError,
}) => {
  const {t} = useTranslation();

  const isErrorName = nameError && name === "";
  const isErrorContent = contentError && content === "";
  const isErrorDescribe = descriptionError && description === "";

  const numberOfCharactersInTheNameField = name.length;
  const numberOfCharactersInTheContentField = content.length;
  const numberOfCharactersInTheDescribeProductField = description.length;

  return (
    <Flex flexDirection='column' gap='50px'>
      <FormControl id='name' isInvalid={isErrorName}>
        <Input
          type='text'
          name='name'
          placeholder={t("products.form.name")}
          maxLength='50'
          bg='#fff'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!isErrorName ? (
          <FormHelperText textAlign='end' color='#7E88A4' padding='0 20px'>
            {numberOfCharactersInTheNameField} {t("products.form.of")} 50
          </FormHelperText>
        ) : (
          <FormErrorMessage>{t("products.form.name_error")}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl id='content' isInvalid={isErrorContent}>
        <Textarea
          type='text'
          name='content'
          placeholder={t("products.form.content")}
          maxLength='200'
          minH='133px'
          bg='#fff'
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {!isErrorContent ? (
          <FormHelperText textAlign='end' color='#7E88A4' padding='0 20px'>
            {numberOfCharactersInTheContentField} {t("products.form.of")} 200
          </FormHelperText>
        ) : (
          <FormErrorMessage>{t("products.form.content_error")}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl id='describe-product' isInvalid={isErrorDescribe}>
        <Textarea
          type='text'
          name='describe-product'
          placeholder={t("products.form.describe_error")}
          maxLength='500'
          minH='147px'
          bg='#fff'
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {!isErrorDescribe ? (
          <FormHelperText textAlign='end' color='#7E88A4' padding='0 20px'>
            {numberOfCharactersInTheDescribeProductField} {t("products.form.of")} 500
          </FormHelperText>
        ) : (
          <FormErrorMessage>{t("products.form.describe_error")}</FormErrorMessage>
        )}
      </FormControl>
    </Flex>
  );
};

export default ContentDescription;
