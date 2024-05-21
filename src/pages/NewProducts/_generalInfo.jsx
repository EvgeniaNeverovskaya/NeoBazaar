import React, { useState } from "react";
import { Flex, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const GeneralInfo = () => {
  const [status, setStatus] = useState("draft");

  return (
    <Flex gap='20%' mb='50px'>
      <FormControl id='id' isDisabled>
        <FormLabel>ID</FormLabel>
        <Input
          type='number'
          name='id'
          placeholder='ID'
          defaultValue='1'
          bg='#fff'
          readOnly
        />
      </FormControl>

      <FormControl id='status'>
        <FormLabel>Status</FormLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          bg='#fff'
          color='#7E88A4'
          fontSize='16px'
          fontWeight='400'
          lineHeight='22px'>
          <option value='draft'>Draft</option>
          <option value='active'>Active</option>
          <option value='inactive'>Inactive</option>
        </Select>
      </FormControl>

      <FormControl id='date' isDisabled>
        <FormLabel>Date</FormLabel>
        <Input
          type='text'
          name='date'
          placeholder='Date'
          defaultValue={new Date().toLocaleDateString()}
          bg='#fff'
          readOnly
        />
      </FormControl>
    </Flex>
  );
};

export default GeneralInfo;
