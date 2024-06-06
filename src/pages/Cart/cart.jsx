// Cart.js
import React, {useState} from "react";
import UserMenu from "../../components/userMenu";
import Cat from "../../image/1.jpg";
import { Box, Container, Flex, Button } from "@chakra-ui/react";
import CartItem from "./_cartItem";
import PayProducts from "./_payProducts";

const data = [
  {
    id : 1,
    name: "Avatar",
    userName: "User Name",
    photo: Cat,
    price: "1.00",
    email: "anna@gmail.com",
    currency: '$'
  },
  {
    id : 2,
    name: "Ava",
    userName: "User Name",
    photo: Cat,
    price: "50.00",
    email: "krsv@gmail.com",
    currency: '$'
  },
  {
    id : 3,
    name: "44444444444444444444444444444444444444444444444444",
    userName: "User Name",
    photo: Cat,
    price: "30.00",
    email: "evg@gmail.com",
    currency: '$'
  },
];

const Cart = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  const handleProductSelect = (productId, isSelected) => {
    if (isSelected) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  const handleSelectAll = () => {
    const allProductIds = data.map(product => product.id);
    setSelectedProducts(allProductIds);
  };

  const handleDeleteAll = () => {
    setSelectedProducts([]);
  };

  return (
    <Box bg='#F9F6F4' height='100vh'>
      <UserMenu/>
      <Container maxW='8xl' ml='330px' w='auto'>
        <Flex>
          <Box className="cart-items" w='60%'>
            {data.map((product)=> (
              <CartItem 
                key={product.id} 
                product={product} 
                onSelect={handleProductSelect}
                isSelected={selectedProducts.includes(product.id)}
              />
            ))}
          </Box>
          <Box w='40%'>
            <PayProducts selectedProducts={selectedProducts} data={data} />
          </Box>
        </Flex>
        <Flex mt='20px' fontFamily='Arial' fontWeight='400' fontSize='20px'>
          <Button onClick={handleSelectAll} mr='10px' bg='white'>Select All</Button>
          <Button onClick={handleDeleteAll} bg='white'>Cancel selection</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Cart;
