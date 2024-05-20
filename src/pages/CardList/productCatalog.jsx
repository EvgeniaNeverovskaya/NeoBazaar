import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Container, Box, Text, } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProductCard from "./_productCard";
import MemoizedCategoryFilter from "./_categoryFilter";
import Search from "./_search";
import products from "./_products";
import { CiFaceFrown } from "react-icons/ci";

const categoryFilterBackgrounds = {
  "3D": "#FFD3F6",
  Education: "#A7D9D4",
  Audio: "#FFE999",
  Design: "#FFC9F4",
  "Drawing-&-Painting": "#D37374",
  Photography: "#FEFFA4",
  Gaming: "#FFB3A2",
  "Fitness-&-Health": "#B0C1F3",
  "Software-&-Development": "#D7D0CE",
  All: "#C5C2C0",
};

const categoryBackgrounds = {
  "3D": "#FFF7FD",
  Education: "#F3FFFE",
  Audio: "#FFFAEA",
  Design: "#FFF0FC",
  "Drawing-&-Painting": "#FFF1F1",
  Photography: "#FFFFEA",
  Gaming: "#FFEBE7",
  "Fitness-&-Health": "#EFF3FF",
  "Software-&-Development": "#F8F7F7",
};

function ProductList({ products, backgroundColor }) {
  let justifyContentValue = "space-around";
  if (products.length % 2 !== 0) {
    justifyContentValue='flex-start'
  }
   return (
    <Box
      className='product-list'
      display='flex'
      flexWrap='wrap'
      gap='4%'
      justifyContent={justifyContentValue}
      bg={backgroundColor}
      
    >      
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );

}

const ProductCatalog = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    if (category && category !== "All") {
      setFilteredProducts(
        products.filter((product) => product.category === category),
      );
    } else {
      setFilteredProducts(products);
    }
    setSearchResults([]);
    setIsSearchActive(false);
  }, [category, products]);

  const handleSearch = (query) => {
    const results = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchResults(results);
    setIsSearchActive(true);
  };

  function NoResults() {
    return (
      <Box sx={{  position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "-webkit-center"
      }}>
        <CiFaceFrown fontSize='44px' />
        <Text fontSize='25px' fontWeight='700' lineHeight='20px' mt='25px'>Product not found</Text>
      </Box>
    );
  }

  const backgroundColor = categoryBackgrounds[category] || "#ffffff";
  const filterBackgrounds = categoryFilterBackgrounds[category] || "#ffffff";
  return (
    <Box bg={backgroundColor}  display="flex" flexDirection="column" minHeight="100vh">
      <Box style={{ position: 'sticky', top: 0 }}>
      <Header />
      <Box bg={filterBackgrounds} marginTop='50px' maxH='270px'>
        <Container maxW='8xl'>
          <Box>
            <Search onSearch={handleSearch} />
            <MemoizedCategoryFilter />
          </Box>
        </Container>
      </Box>
      </Box>
      <Container maxW='8xl'>
        <Box as='section' className='productList' margin='50px 0' >
          {isSearchActive ? (
            searchResults.length > 0 ? (
              <ProductList products={searchResults} />
            ) : (
              <NoResults/>
            )
          ) : (
            <ProductList products={filteredProducts} />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductCatalog;
