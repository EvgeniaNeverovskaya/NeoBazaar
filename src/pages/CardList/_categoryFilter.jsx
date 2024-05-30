import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Container } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation, useParams, useNavigate   } from "react-router-dom";



const CategoryFilter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
 
  useEffect(() => {
      const pathCategory = location.pathname.split('/')[1];
      setSelectedCategory(pathCategory || 'All');
  }, [location]);
 
  const handleCategoryClick = useCallback((category) => {
    navigate(`/${category}`);
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
  "Drawing-&-Painting": "#F29D9E",
  Photography: "#FAFAB0",
  Gaming: "#FFB9AA",
  "Fitness-&-Health": "#B6C2E5",
  "Software-&-Development": "#E9EAEA",
  "All": '#E8E8E7'
};

const backgroundColor = sectionFilterAndSearchBackgrounds[category] || "#ffffff";
 return (
    <Box as="section" className="AllCategories" padding='12.5px 0 25px'>
      <Container maxW="8xl" padding='0px'>
      <Box display="flex" justifyContent="space-between" bg={backgroundColor} borderRadius="14px" padding="6.5px">
          <Button sx={ButtonStyle('All')} onClick={() => handleCategoryClick('All')}>All</Button>
          <Button sx={ButtonStyle('3D')} onClick={() => handleCategoryClick('3D')}>3D</Button>
          <Button sx={ButtonStyle('Education')} onClick={() => handleCategoryClick('Education')}>Education</Button>
          <Button sx={ButtonStyle('Audio')} onClick={() => handleCategoryClick('Audio')}>Audio</Button>
          <Button sx={ButtonStyle('Design')} onClick={() => handleCategoryClick('Design')}>Design</Button>
          <Button sx={ButtonStyle('Drawing-&-Painting')} onClick={() => handleCategoryClick('Drawing-&-Painting')}>Drawing & Painting</Button>
          <Button sx={ButtonStyle('Photography')} onClick={() => handleCategoryClick('Photography')}>Photography</Button>
          <Button sx={ButtonStyle('Fitness-&-Health')} onClick={() => handleCategoryClick('Fitness-&-Health')}>Fitness & Health</Button>
          <Button sx={ButtonStyle('Gaming')} onClick={() => handleCategoryClick('Gaming')}>Gaming</Button>
          <Button sx={ButtonStyle('Software-&-Development')} onClick={() => handleCategoryClick('Software-&-Development')}>Software Development</Button>
        </Box>
      </Container>
    </Box>
 );
};

const MemoizedCategoryFilter = React.memo(CategoryFilter);



export default MemoizedCategoryFilter;
