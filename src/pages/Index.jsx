import { Box, Container, Heading, Text, VStack, SimpleGrid, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Box bg="blue.500" w="full" p={10} color="white" textAlign="center">
          <Heading>Welcome to E-Shop</Heading>
          <Text>Your one-stop shop for all electronics</Text>
        </Box>
        <Box w="full">
          <Heading size="lg" mb={4}>Featured Products</Heading>
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
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;