import React, { useState } from "react";
import { Flex, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const GeneralInfo = ({ status, setStatus, id, setId, setDate }) => {
  const {t} = useTranslation();

  return (
    <Flex gap='20%' mb='50px'>
      <FormControl id='id' isDisabled>
        <FormLabel>ID</FormLabel>
        <Input
          type='number'
          name='id'
          placeholder='ID'
          bg='#fff'
          readOnly
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </FormControl>

      <FormControl id='status'>
        <FormLabel>{t("products.form.status")}</FormLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          bg='#fff'
          color='#7E88A4'
          fontSize='16px'
          fontWeight='400'
          lineHeight='22px'>
          <option value='draft'>{t("products.form.draft")}</option>
          <option value='published'>{t ("products.form.published")}</option>
          <option value='deactivated'>{t ("products.form.deactivated")}</option>
        </Select>
      </FormControl>

      <FormControl id='date' isDisabled>
        <FormLabel>{t("products.form.date")}</FormLabel>
        <Input
          type='text'
          name='date'
          placeholder='Date'
          defaultValue={new Date().toLocaleDateString()}
          onChange={(e) => setDate(e.target.value)}
          bg='#fff'
          readOnly
        />
      </FormControl>
    </Flex>
  );
};

export default GeneralInfo;
