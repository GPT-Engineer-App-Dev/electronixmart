import { Box, Container, Heading, SimpleGrid, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Products = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading mb={6}>Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/sample-product.jpg" alt="Sample Product" />
          <Box p={6}>
            <Heading size="md">Sample Product</Heading>
            <Text mt={2}>$99.99</Text>
            <Link as={RouterLink} to="/products/1" color="blue.500" mt={2} display="block">
              View Details
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Products;