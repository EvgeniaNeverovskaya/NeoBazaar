import React, { useState } from "react";
import {
  Box,
  Input,
  InputRightElement,
  InputLeftElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      onSearch(searchQuery);
      setSearchQuery(""); 
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

 const clearVisible = searchQuery ? "1" : "0";

  return (
    <Box padding='50px 0 25px' display='flex' gap='50px'>
      <InputGroup position='relative'>
        <InputLeftElement
        height='-webkit-fill-available'
          pointerEvents='none' 
          children={<FaSearch color='gray' fontSize='24px' />}
        />
        <Input
        padding='23px 20px 23px 40px'
        fontSize='16px'
        lineHeight='22px'
          type='text'
          bg='white'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
          
        />
        <InputRightElement
        height='-webkit-fill-available'
        opacity={clearVisible}
          cursor='pointer'
          children={<BsXLg color='gray' fontSize='16px' />}
          onClick={handleClear}
        />
      </InputGroup>
      <Button onClick={handleSearch} minW="266px" height='auto' bg='#393030' color='#fff' borderRadius='10px' padding='10px 20px' fontSize='20px' lineHeight='23px' fontFamily='Arial' fontWeight='400'>Search</Button>
    </Box>
  );
};

export default Search;
