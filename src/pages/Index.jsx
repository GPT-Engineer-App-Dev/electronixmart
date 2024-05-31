import { Box, Container, Heading, Text, VStack, SimpleGrid, Image, Link, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    { id: 1, name: "Sample Product", price: "$99.99", image: "/images/sample-product.jpg" },
    // Add more products here
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Box bg="blue.500" w="full" p={10} color="white" textAlign="center">
          <Heading>Welcome to E-Shop</Heading>
          <Text>Your one-stop shop for all electronics</Text>
        </Box>
        <Box w="full">
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            mb={4}
          />
          <Heading size="lg" mb={4}>Featured Products</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {filteredProducts.map(product => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={6}>
                  <Heading size="md">{product.name}</Heading>
                  <Text mt={2}>{product.price}</Text>
                  <Link as={RouterLink} to={`/products/${product.id}`} color="blue.500" mt={2} display="block">
                    View Details
                  </Link>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;