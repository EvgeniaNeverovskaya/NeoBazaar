import React, { useState, useEffect } from "react";
import { FormControl, Select, FormErrorMessage } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";


const CategorySelection = ({ category, setCategory, categoryError }) => {
    const {t} = useTranslation();

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://neobazaar-ee1c625c2e80.herokuapp.com/categories');
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCategories();
  }, []);

  const isErrorCategory = categoryError && category === "";


  return (
    <FormControl id="category" isInvalid={isErrorCategory}>
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        bg="#fff"
        color="#7E88A4"
        fontSize="16px"
        fontWeight="400"
        lineHeight="22px"
        placeholder={t("products.form.category")} 
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
{t(`category.${cat.name}`)}          </option>
        ))}
      </Select>
      {isErrorCategory && (
        <FormErrorMessage>{t("products.form.category_is_required")}</FormErrorMessage> 
      )}
    </FormControl>
  );
};

export default CategorySelection;
