import React, { useState } from "react";
import { FormControl, Select, FormErrorMessage } from "@chakra-ui/react";

const CategorySelection = ({ category, setCategory, categoryError }) => {
  const categories = [
    "Education",
    "Audio",
    "Design",
    "Drawing & Painting",
    "Photography",
    "Gaming",
    "Fitness & Health",
    "Software & Development",
  ];

  const isErrorCategory = categoryError && category === "";

  return (
    <FormControl id='category' isInvalid={isErrorCategory}>
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        bg='#fff'
        color='#7E88A4'
        fontSize='16px'
        fontWeight='400'
        lineHeight='22px'>
        <option selected hidden disabled value=''>
          Category
        </option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </Select>
      {isErrorCategory && (
        <FormErrorMessage>Category is required.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CategorySelection;
