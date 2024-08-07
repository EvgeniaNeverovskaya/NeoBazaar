import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Container } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation, useParams, useNavigate   } from "react-router-dom";
import { useTranslation } from "react-i18next";



const CategoryFilter = () => {
  const {t} = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
 
  useEffect(() => {
    const pathCategory = decodeURIComponent(location.pathname.split('/')[1]);
    setSelectedCategory(pathCategory || 'All');
  }, [location]);

  const handleCategoryClick = useCallback((category) => {
    navigate(`/${encodeURIComponent(category)}`);
  }, [navigate]);
   

 const ButtonStyle = (category) => ({
    color: selectedCategory === category ? '#2F2F2F' : '#606C8E',
    backgroundColor: selectedCategory === category ? 'white' : 'transparent',
    fontSize: "14px", 
    fontWeight: "500",
    lineHeight: "16.71px", 
    width: "auto", 
    height: "35px",
    borderRadius: '6px',
    padding: '12px',
    margin: '0 10px',
    whiteSpace: 'wrap'
 });
 const { category } = useParams();

 const sectionFilterAndSearchBackgrounds = {
  "3D": "#D27AB3",
  Education: "#ACD2CF",
  Audio: "#F4E9C4",
  Design: "#FFC9F4",
  "Drawing & Painting": "#F29D9E",
  Photography: "#FAFAB0",
  Gaming: "#FFB9AA",
  "Fitness & Health": "#B6C2E5",
  "Software development": "#E9EAEA",
  "All": '#E8E8E7'
};

const backgroundColor = sectionFilterAndSearchBackgrounds[category] || "#ffffff";
 return (
    <Box as="section" className="AllCategories" padding='12.5px 0 25px'>
      <Container maxW="8xl" padding='0px'>
      <Box display="flex" justifyContent="space-between" bg={backgroundColor} borderRadius="14px" padding="6.5px">
          <Button sx={ButtonStyle('All')} onClick={() => handleCategoryClick('All')}>{t('category.all')}</Button>
          <Button sx={ButtonStyle('3D')} onClick={() => handleCategoryClick('3D')}>{t('category.3D')}</Button>
          <Button sx={ButtonStyle('Education')} onClick={() => handleCategoryClick('Education')}>{t('category.education')}</Button>
          <Button sx={ButtonStyle('Audio')} onClick={() => handleCategoryClick('Audio')}>{t('category.audio')}</Button>
          <Button sx={ButtonStyle('Design')} onClick={() => handleCategoryClick('Design')}>{t('category.design')}</Button>
          <Button sx={ButtonStyle('Drawing & Painting')} onClick={() => handleCategoryClick('Drawing & Painting')}>{t('category.drawing_&_painting')}</Button>
          <Button sx={ButtonStyle('Photography')} onClick={() => handleCategoryClick('Photography')}>{t('category.photography')}</Button>
          <Button sx={ButtonStyle('Fitness & Health')} onClick={() => handleCategoryClick('Fitness & Health')}>{t('category.fitness_&_health')}</Button>
          <Button sx={ButtonStyle('Gaming')} onClick={() => handleCategoryClick('Gaming')}>{t('category.gaming')}</Button>
          <Button sx={ButtonStyle('Software development')} onClick={() => handleCategoryClick('Software development')}>{t('category.software_&_development')}</Button>
        </Box>
      </Container>
    </Box>
 );
};

const MemoizedCategoryFilter = React.memo(CategoryFilter);



export default MemoizedCategoryFilter;
