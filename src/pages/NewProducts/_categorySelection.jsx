import React, { useState } from "react";
import { FormControl, Select } from "@chakra-ui/react";

const CategorySelection = () => {
  const [category, setCategory] = useState("");

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

  return (
    <FormControl id='category'>
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder='Category'
        bg='#fff'
        color='#7E88A4'
        fontSize='16px'
        fontWeight='400'
        lineHeight='22px'>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelection;
